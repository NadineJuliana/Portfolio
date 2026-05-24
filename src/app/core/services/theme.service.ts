import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark' | 'color';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme = signal<AppTheme>('light');
  private _heroActive = signal(true);
  private _activeSection = signal<string>('hero');

  theme = this._theme.asReadonly();
  heroActive = this._heroActive.asReadonly();
  activeSection = this._activeSection.asReadonly();

  setTheme(theme: AppTheme) {
    this._theme.set(theme);
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-color');
    document.body.classList.add(`theme-${theme}`);
  }

  setHeroActive(active: boolean) {
    this._heroActive.set(active);
  }

  setActiveSection(section: string) {
    this._activeSection.set(section);
  }
}
