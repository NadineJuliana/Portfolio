import { AfterViewInit, Component, ElementRef, inject, QueryList, ViewChildren, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Header } from '../../../components/header/header/header';
import { HeroSection } from '../../../../features/hero/hero-section/hero-section';
import { AboutMeSection } from '../../../../features/about-me/about-me-section/about-me-section';
import { SkillsSection } from '../../../../features/skills/skills-section/skills-section';
import { ProjectsSection } from '../../../../features/projects/projects-section/projects-section';
import { ReferencesSection } from '../../../../features/references/references-section/references-section';
import { ContactSection } from '../../../../features/contact/contact-section/contact-section';
import { ThemeService } from '../../../../core/services/theme.service';
import { SideNavigation } from '../../../shared/side-navigation/side-navigation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [Header, HeroSection, AboutMeSection, SkillsSection, ProjectsSection, ReferencesSection, ContactSection, SideNavigation],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements AfterViewInit {
  private themeService = inject(ThemeService);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);
  private sectionObserver!: IntersectionObserver;

  @ViewChildren('sectionRef') sections!: QueryList<ElementRef<HTMLElement>>;


  ngAfterViewInit() {
    this.observeSections();
    this.scrollToFragment();
  }

  private observeSections() {
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

  private scrollToFragment(): void {
    this.route.fragment
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(fragment => {
        if (!fragment) return;

        requestAnimationFrame(() => {
          const target = document.getElementById(fragment);
          if (!target) return;

          const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

          target.scrollIntoView({
            behavior: reduceMotion ? 'instant' : 'smooth',
            block: 'start',
          });
        });
      });
  }

  ngOnDestroy() {
    this.sectionObserver?.disconnect();
  }
}
