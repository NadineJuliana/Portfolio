import { Component, EventEmitter, Output } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  imports: [TranslatePipe],
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
