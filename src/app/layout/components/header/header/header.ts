import { NgClass } from '@angular/common';
import { ThemeService } from './../../../../core/services/theme.service';
import { Component, computed, EventEmitter, inject, Output } from '@angular/core';
import { BurgerMenu } from '../../../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-header',
  imports: [NgClass, BurgerMenu],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() menuToggle = new EventEmitter<void>();
  private themeService = inject(ThemeService);
  readonly theme = this.themeService.theme;
  readonly isHeroSection = this.themeService.heroActive;
  isMenuOpen = false;

  currentLang: 'de' | 'en' = 'de';

  setLanguage(lang: 'de' | 'en') {
    this.currentLang = lang;
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
