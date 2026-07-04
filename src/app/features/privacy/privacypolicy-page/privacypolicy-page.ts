import { Component , inject} from '@angular/core';
import { Header } from '../../../layout/components/header/header/header';
import { Footer } from '../../../layout/components/footer/footer/footer';
import { ThemeService } from '../../../core/services/theme.service';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-privacypolicy-page',
  imports: [Header, Footer, TranslatePipe],
  templateUrl: './privacypolicy-page.html',
  styleUrl: './privacypolicy-page.scss',
})
export class PrivacypolicyPage {
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.setTheme('dark');
    this.themeService.setHeroActive(false);
    this.themeService.setActiveSection('imprint');
  }
}
