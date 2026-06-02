import { Component } from '@angular/core';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { ContactForm } from '../../../shared/contact-form/contact-form';

@Component({
  selector: 'app-contact-section',
  imports: [Footer, ContactForm],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {

}
