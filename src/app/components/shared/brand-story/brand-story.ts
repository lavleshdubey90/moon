import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BrandStoryBanner {
  title: string;
  alt: string;
  caption?: string;
  description: string;
  image: string;
  link?: {
    url: string;
    text: string;
  };
  direction: 'text-image' | 'image-text';
}

@Component({
  selector: 'app-brand-story',
  imports: [RouterLink],
  templateUrl: './brand-story.html',
  styleUrl: './brand-story.css',
})
export class BrandStory {
  @Input() brandStory: BrandStoryBanner = {
    title: '',
    alt: '',
    description: '',
    image: '',
    link: {
      url: '',
      text: '',
    },
    direction: 'text-image', // text-image or image-text
  };
  @Input() reverse: boolean = false;
}
