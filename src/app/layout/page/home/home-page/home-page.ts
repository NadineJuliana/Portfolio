import { AfterViewInit, Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { Header } from '../../../components/header/header/header';
import { Footer } from '../../../components/footer/footer/footer';
import { HeroSection } from '../../../../features/hero/hero-section/hero-section';
import { AboutMeSection } from '../../../../features/about-me/about-me-section/about-me-section';
import { SkillsSection } from '../../../../features/skills/skills-section/skills-section';
import { ProjectsSection } from '../../../../features/projects/projects-section/projects-section';
import { ReferencesSection } from '../../../../features/references/references-section/references-section';
import { ContactSection } from '../../../../features/contact/contact-section/contact-section';
import { ThemeService } from '../../../../core/services/theme.service';
import { SideNavigation } from '../../../shared/side-navigation/side-navigation';

@Component({
  selector: 'app-home-page',
  imports: [Header, Footer, HeroSection, AboutMeSection, SkillsSection, ProjectsSection, ReferencesSection, ContactSection, SideNavigation],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements AfterViewInit {
  private themeService = inject(ThemeService);
  private sectionObserver!: IntersectionObserver;

  @ViewChildren('sectionRef') sections!: QueryList<ElementRef<HTMLElement>>;


  ngAfterViewInit() {
    this.sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const theme = entry.target.getAttribute('data-theme' as string) as 'light' | 'dark' | 'color';
        this.themeService.setTheme(theme);
        this.themeService.setHeroActive(entry.target.id === 'hero');
        this.themeService.setActiveSection(entry.target.id);
      });
    }, { threshold: 0.6 });
    this.sections.forEach(section => this.sectionObserver.observe(section.nativeElement));
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }
}
