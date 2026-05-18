import { NgClass } from '@angular/common';
import { ThemeService } from './../../../../core/services/theme.service';
import { Component, computed, inject } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;
  readonly isHeroSection = this.themeService.heroActive;

  currentLang: 'de' | 'en' = 'de';

  setLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
  }
}
