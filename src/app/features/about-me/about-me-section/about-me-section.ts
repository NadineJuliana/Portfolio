import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  imports: [TranslatePipe],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMeSection {
  showMore = false;
  private pinnedOpen = false;

  openOverlay(): void {
    this.showMore = true;
  }

  closeOverlay(): void {
    if (!this.pinnedOpen) {
      this.showMore = false;
    }
  }

  toggleOverlay(): void {
    this.pinnedOpen = !this.pinnedOpen;
    this.showMore = this.pinnedOpen;
  }

  dismissOverlay(): void {
    this.pinnedOpen = false;
    this.showMore = false;
  }
}
