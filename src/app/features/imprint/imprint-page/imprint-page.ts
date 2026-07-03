import { Component, inject} from '@angular/core';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { Header } from '../../../layout/components/header/header/header';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-imprint-page',
  imports: [Header, Footer],
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
}

