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

  openOverlay() {
    this.showMore = true;
  }

  closeOverlay() {
    this.showMore = false;
  }
}
