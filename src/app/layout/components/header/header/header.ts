import { NgClass } from '@angular/common';
import { ThemeService } from './../../../../core/services/theme.service';
import { LanguageService } from './../../../../core/services/language.service';
import { Component, inject } from '@angular/core';
import { BurgerMenu } from '../../../../shared/burger-menu/burger-menu';


@Component({
  selector: 'app-header',
  imports: [NgClass, BurgerMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);

  readonly theme = this.themeService.theme;
  readonly isHeroSection = this.themeService.heroActive;
  readonly currentLang = this.languageService.currentLanguage;

  isMenuOpen = false;

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
