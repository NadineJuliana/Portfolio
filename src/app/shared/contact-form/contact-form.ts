import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
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
