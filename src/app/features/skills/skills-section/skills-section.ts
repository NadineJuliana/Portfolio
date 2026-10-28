import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  imports: [TranslatePipe],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {
  showMore = false;
  activeSkillCategory: 'frontend' | 'backend' = 'frontend';

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
