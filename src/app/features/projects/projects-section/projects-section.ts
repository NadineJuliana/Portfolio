import { Component } from '@angular/core';
import { PROJECTS } from './data/projects.data';

@Component({
  selector: 'app-projects-section',
  imports: [],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSection {
  projects = PROJECTS;
  currentIndex = 0;
  showDescription = false;

  get currentProject() {
    return this.projects[this.currentIndex];
  }

  nextProject() {
    this.currentIndex =
      (this.currentIndex + 1) % this.projects.length;
  }

  previousProject() {
    this.currentIndex =
      (this.currentIndex - 1 + this.projects.length)
      % this.projects.length;
  }
}
