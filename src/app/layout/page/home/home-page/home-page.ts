import { Component } from '@angular/core';
import { Header } from '../../../components/header/header/header';
import { Footer } from '../../../components/footer/footer/footer';
import { HeroSection } from '../../../../features/hero/hero-section/hero-section';
import { AboutMeSection } from '../../../../features/about-me/about-me-section/about-me-section';
import { SkillsSection } from '../../../../features/skills/skills-section/skills-section';
import { ProjectsSection } from '../../../../features/projects/projects-section/projects-section';
import { ReferencesSection } from '../../../../features/references/references-section/references-section';
import { ContactSection } from '../../../../features/contact/contact-section/contact-section';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-home-page',
  imports: [Header, Footer, HeroSection, AboutMeSection, SkillsSection, ProjectsSection, ReferencesSection, ContactSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  constructor(private themeService: ThemeService) { }

  ngAfterViewInit() {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute('data-theme' as string) as 'light' | 'dark' | 'color';
          this.themeService.setTheme(theme);
          const isHero = entry.target.id === 'hero';
          this.themeService.setHeroActive(isHero);
        }
      })
    }, { threshold: 0.6 });
    sections.forEach(section => observer.observe(section));
  }
}
