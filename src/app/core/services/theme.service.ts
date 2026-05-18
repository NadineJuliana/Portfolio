import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<'light' | 'dark' | 'color'>('light');
  private _heroActive = signal(true);

  theme = this._theme.asReadonly();
  heroActive = this._heroActive.asReadonly();

  setTheme(theme: 'light' | 'dark' | 'color') {
    this._theme.set(theme);
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-color');
    document.body.classList.add(`theme-${theme}`);
  }

  setHeroActive(active: boolean) {
    this._heroActive.set(active);
  }
}
