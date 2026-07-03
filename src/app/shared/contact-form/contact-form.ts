import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private http = inject(HttpClient);

  readonly mailEndpoint = 'send_mail.php';

  contactForm = new FormGroup({
    fullname: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)]
    }),
    mail: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(10)],
    }),
    check: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  })

  get fullname() {
    return this.contactForm.controls.fullname;
  }

  get mail() {
    return this.contactForm.controls.mail;
  }

  get message() {
    return this.contactForm.controls.message;
  }

  get check() {
    return this.contactForm.controls.check;
  }

  isInvalid(control: FormControl): boolean {
    return control.invalid && control.touched;
  }

  private resetForm(): void {
    this.contactForm.reset({
      fullname: '',
      mail: '',
      message: '',
      check: false,
    });
  }

  formSubmit() : void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.fullname.value,
      email: this.mail.value,
      message: this.message.value,
    };

    // console.log(this.contactForm.value);

    this.http.post(this.mailEndpoint, payload, { responseType: 'text' }).subscribe({
      next: () => {
        this.resetForm();
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
