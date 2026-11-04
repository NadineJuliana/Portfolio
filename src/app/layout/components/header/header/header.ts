import { NgClass } from '@angular/common';
import { Component, inject, ElementRef, viewChild, effect, signal } from '@angular/core';
import { ThemeService } from './../../../../core/services/theme.service';
import { LanguageService } from './../../../../core/services/language.service';
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

  readonly burgerButton =
    viewChild.required<ElementRef<HTMLButtonElement>>('burgerButton');

  readonly burgerMenu = viewChild(BurgerMenu);
  readonly isMenuOpen = signal(false);

  constructor() {
    effect(() => {
      const menu = this.burgerMenu();

      if (menu && this.isMenuOpen()) {
        menu.focusCloseButton();
      }
    });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  openMenu(): void {
    this.isMenuOpen.set(true);
  }

  closeMenu(restoreFocus = true): void {
    this.isMenuOpen.set(false);

    if (restoreFocus) {
      this.burgerButton().nativeElement.focus();
    }
  }
}
