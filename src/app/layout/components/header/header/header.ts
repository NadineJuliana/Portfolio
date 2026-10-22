import { NgClass } from '@angular/common';
import { ThemeService } from './../../../../core/services/theme.service';
import { LanguageService } from './../../../../core/services/language.service';
import { Component, inject, ElementRef, ViewChild } from '@angular/core';
import { BurgerMenu } from '../../../../shared/burger-menu/burger-menu';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  imports: [NgClass, BurgerMenu, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private themeService = inject(ThemeService);
  private languageService = inject(LanguageService);

  readonly theme = this.themeService.theme;
  readonly isHeroSection = this.themeService.heroActive;
  readonly currentLang = this.languageService.currentLanguage;

  @ViewChild('burgerButton')
  burgerButton?: ElementRef<HTMLButtonElement>;

  @ViewChild(BurgerMenu)
  set burgerMenu(menu: BurgerMenu | undefined) {
    if (menu && this.isMenuOpen) {
      menu.focusCloseButton();
    }
  }

  isMenuOpen = false;

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu(restoreFocus = true): void {
    this.isMenuOpen = false;

    if (restoreFocus) {
      this.burgerButton?.nativeElement.focus();
    }
  }
}
