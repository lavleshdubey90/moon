import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly aboutUsLinks = [
    { label: 'Mission', link: '#' },
    { label: 'Our team', link: '#' },
    { label: 'Awards', link: '#' },
    { label: 'Testimonials', link: '#' },
    { label: 'Privacy policy', link: '#' },
  ];

  protected readonly servicesLinks = [
    { label: 'Web design', link: '#' },
    { label: 'Web development', link: '#' },
    { label: 'Mobile design', link: '#' },
    { label: 'UI/UX design', link: '#' },
    { label: 'Branding design', link: '#' },
  ];

  protected readonly portfolioLinks = [
    { label: 'Corporate websites', link: '#' },
    { label: 'E-commerce', link: '#' },
    { label: 'Mobile apps', link: '#' },
    { label: 'Landing pages', link: '#' },
    { label: 'UI/UX projects', link: '#' },
  ];

  protected readonly currentYear = new Date().getFullYear();
}