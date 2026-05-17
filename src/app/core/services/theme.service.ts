import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme = new BehaviorSubject<'light' | 'dark' | 'color'>('light');
  theme$ = this.theme.asObservable();

  private heroActive = new BehaviorSubject<boolean>(true);
  heroActive$ = this.heroActive.asObservable();

  setTheme(theme: 'light' | 'dark' | 'color') {
    this.theme.next(theme);
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-color');
    document.body.classList.add(`theme-${theme}`);
  }

  setHeroActive(active: boolean) {
    this.heroActive.next(active);
  }
}
