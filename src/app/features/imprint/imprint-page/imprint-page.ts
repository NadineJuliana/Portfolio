import { Component, inject } from '@angular/core';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { Header } from '../../../layout/components/header/header/header';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint-page',
  imports: [Header, Footer, TranslatePipe, RouterLink],
  templateUrl: './imprint-page.html',
  styleUrl: './imprint-page.scss',
})
export class ImprintPage {
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.setTheme('dark');
    this.themeService.setHeroActive(false);
    this.themeService.setActiveSection('imprint');
  }

  highlightText(text: string): string {
    if (!text) return '';

    return text.replace(
      /Developer Akademie GmbH|Developer Akademie|Portfolio/g,
      (match) => {
        const className =
          match === 'Portfolio'
            ? 'portfolio-highlight'
            : 'developer-highlight';

        return `<span class="${className}">${match}</span>`;
      }
    );
  }
}


