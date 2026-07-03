import { Component } from '@angular/core';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { ContactForm } from '../../../shared/contact-form/contact-form';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-section',
  imports: [Footer, ContactForm, TranslatePipe],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {

}
