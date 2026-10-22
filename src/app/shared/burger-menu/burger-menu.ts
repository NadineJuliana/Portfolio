import { Component, EventEmitter, Output, HostListener, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  imports: [TranslatePipe],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})
export class BurgerMenu {
  @Output() closeMenu = new EventEmitter<boolean>();

  @ViewChild('closeButton')
  closeButton?: ElementRef<HTMLButtonElement>;

  focusCloseButton(): void {
    this.closeButton?.nativeElement.focus();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: Event): void {
    event.preventDefault();
    this.close();
  }

  close(restoreFocus = true): void {
    this.closeMenu.emit(restoreFocus);
  }
}
