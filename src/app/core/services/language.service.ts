import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'de' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private translate = inject(TranslateService);

  readonly currentLanguage = signal<Language>(this.getInitialLanguage());

  constructor() {
    this.translate.setFallbackLang('de');
    this.translate.use(this.currentLanguage());
  }

  toggleLanguage(): void {
    const language = this.currentLanguage() === 'de' ? 'en' : 'de';
    this.setLanguage(language);
  }

  setLanguage(language: Language): void {
    this.currentLanguage.set(language);
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  private getInitialLanguage(): Language {
    const savedLanguage = localStorage.getItem('language');

    return savedLanguage === 'en' ? 'en' : 'de';
  }
}
