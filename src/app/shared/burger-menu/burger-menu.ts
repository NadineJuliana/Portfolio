import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})
export class BurgerMenu {
  @Output() closeMenu = new EventEmitter<void>();
  isMenuOpen = false;

  close(): void {
    this.closeMenu.emit();
  }
}
