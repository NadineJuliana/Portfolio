import { Component } from '@angular/core';
import { Header } from '../../../components/header/header/header';
import { Footer } from '../../../components/footer/footer/footer';
import { HeroSection } from '../../../../features/hero/hero-section/hero-section';
import { AboutMeSection } from '../../../../features/about-me/about-me-section/about-me-section';
import { SkillsSection } from '../../../../features/skills/skills-section/skills-section';
import { ProjectsSection } from '../../../../features/projects/projects-section/projects-section';
import { ReferencesSection } from '../../../../features/references/references-section/references-section';
import { ContactSection } from '../../../../features/contact/contact-section/contact-section';

@Component({
  selector: 'app-home-page',
  imports: [Header, Footer, HeroSection, AboutMeSection, SkillsSection, ProjectsSection, ReferencesSection, ContactSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
