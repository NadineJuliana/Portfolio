import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from "@angular/router";
import { noWhitespaceValidator } from '../validators/no-whitespace.validator';

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
type FormField = 'fullname' | 'mail' | 'message';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe, RouterLink],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private http = inject(HttpClient);

  readonly mailEndpoint = 'send_mail.php';

  readonly submitStatus = signal<SubmitStatus>('idle');
  readonly focusedField = signal<FormField | null>(null);

  contactForm = new FormGroup({
    fullname: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, noWhitespaceValidator(), Validators.minLength(2), Validators.maxLength(100),]
    }),

    mail: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/), Validators.maxLength(254),],
    }),

    message: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, noWhitespaceValidator(), Validators.minLength(10), Validators.maxLength(1000),],
    }),

    check: new FormControl(false, {
      nonNullable: true,
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

  get isSending(): boolean {
    return this.submitStatus() === 'sending';
  }

  isInvalid(control: FormControl): boolean {
    return control.invalid && control.touched;
  }

  setFocusedField(field: FormField | null): void {
    this.focusedField.set(field);
  }

  showFieldError(control: FormControl, field: FormField): boolean {
    return control.invalid
      && control.touched
      && this.focusedField() !== field;
  }

  getFullnameError(): string {
    if (this.fullname.hasError('minlength')) {
      return 'contact.form.nameMinLengthError';
    }

    if (this.fullname.hasError('maxlength')) {
      return 'contact.form.nameMaxLengthError';
    }

    return '';
  }

  getMailError(): string {
    if (this.mail.hasError('email') || this.mail.hasError('pattern')) {
      return 'contact.form.emailInvalidError';
    }

    if (this.mail.hasError('maxlength')) {
      return 'contact.form.emailMaxLengthError';
    }

    return '';
  }

  getMessageError(): string {
    if (this.message.hasError('minlength')) {
      return 'contact.form.messageMinLengthError';
    }

    if (this.message.hasError('maxlength')) {
      return 'contact.form.messageMaxLengthError';
    }

    return '';
  }

  formSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitStatus.set('sending');

    const payload = {
      name: this.fullname.value.trim(),
      email: this.mail.value.trim(),
      message: this.message.value.trim(),
    };

    this.http.post(this.mailEndpoint, payload, { responseType: 'text' }).subscribe({
      next: () => this.handleSubmitSuccess(),
      error: (error) => this.handleSubmitError(error),
    });
  }

  private handleSubmitSuccess(): void {
    this.resetForm();
    this.showStatusTemporarily('success');
  }

  private handleSubmitError(error: unknown): void {
    console.error('Error sending email:', error);
    this.showStatusTemporarily('error');
  }

  private showStatusTemporarily(status: 'success' | 'error'): void {
    this.submitStatus.set(status);

    window.setTimeout(() => {
      this.submitStatus.set('idle');
    }, 3000);
  }

  private resetForm(): void {
    this.contactForm.reset({
      fullname: '',
      mail: '',
      message: '',
      check: false,
    });
  }
}
