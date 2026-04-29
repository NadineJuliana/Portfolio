import { AsyncPipe, NgClass } from '@angular/common';
import { ThemeService } from './../../../../core/services/theme.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [NgClass, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  theme$: Observable<'light' | 'dark' | 'color'>;

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.theme$;
  }
}
