import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-side-navigation',
  imports: [],
  templateUrl: './side-navigation.html',
  styleUrl: './side-navigation.scss',
})
export class SideNavigation {
  private themeService = inject(ThemeService);

  activeSection = this.themeService.activeSection;
  theme = this.themeService.theme;

  sections = [
    'hero',
    'about',
    'skills',
    'projects',
    'references',
    'contact'
  ];

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  getImage(section: string) {
    const isActive = this.activeSection() === section;
    const theme = this.theme();
    if (isActive) {
      return theme === 'dark'
        ? 'icons/square_green.svg'
        : 'icons/square_pink.svg';
    }
    if (theme === 'light') {
      return 'icons/circle_black.svg';
    }
    return 'icons/circle_white.svg';
  }
}
