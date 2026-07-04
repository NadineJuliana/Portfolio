import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { Header } from '../../../layout/components/header/header/header';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint-page',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './imprint-page.html',
  styleUrl: './imprint-page.scss',
})
export class ImprintPage {
  private themeService = inject(ThemeService);

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.themeService.setTheme('dark');
    this.themeService.setHeroActive(false);
    this.themeService.setActiveSection('imprint');
  }

  highlightText(text: string): SafeHtml {
    if (!text) return '';

    let html = text;

    html = html.replace(/Portfolio/g, `<span class="portfolio-highlight">Portfolio</span>`);
    html = html.replace(
      /Developer Akademie GmbH/g,
      `<span class="developer-highlight">Developer Akademie GmbH</span>`,
    );
    html = html.replace(
      /Developer Akademie/g,
      `<span class="developer-highlight">Developer Akademie</span>`,
    );

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}


