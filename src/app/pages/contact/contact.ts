import { Component } from '@angular/core';
import { ContactForm } from '../../components/shared/contact-form/contact-form';
import { Map } from "../../components/map/map";

@Component({
  selector: 'app-contact',
  imports: [ContactForm, Map],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly socialMedia = [
    { name: 'Facebook', url: '#', icon: '/icons/facebook.svg' },
    { name: 'Twitter', url: '#', icon: '/icons/twitter.svg' },
    { name: 'Instagram', url: '#', icon: '/icons/instagram.svg' },
    { name: 'LinkedIn', url: '#', icon: '/icons/linkedin.svg' },
    { name: 'YouTube', url: '#', icon: '/icons/youtube.svg' },
  ];

  protected readonly mapCenter: [number, number] = [-0.1262408072469022, 51.51547399918468];
  protected readonly mapZoom: number = 12;
}
