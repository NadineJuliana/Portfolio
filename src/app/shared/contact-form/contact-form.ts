import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {

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

  formSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log(this.contactForm.value);

    this.contactForm.reset({
      fullname: '',
      mail: '',
      message: '',
      check: false,
    });
  }
}
