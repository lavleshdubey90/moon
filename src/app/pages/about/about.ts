import { Component } from '@angular/core';
import { BrandStory, BrandStoryBanner } from '../../components/shared/brand-story/brand-story';
import { Newsletter } from "../../components/shared/newsletter/newsletter";

@Component({
  selector: 'app-about',
  imports: [BrandStory, Newsletter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly history1910: BrandStoryBanner = {
    title: '1910',
    alt: 'Bowl',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: '/images/banners/bowl.png',
    direction: 'text-image',
  };
  protected readonly origin: BrandStoryBanner = {
    title: '1990',
    alt: 'Pot',
    description: 'Maecenas sem eros, rutrum vitae risus eget, vulputate aliquam nisi. dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit ',
    image: '/images/banners/pot.png',
    direction: 'image-text',
  };
  protected readonly origin2010: BrandStoryBanner = {
    title: '2010',
    alt: 'Marine Plate',
    description: 'Rutrum vitae risus eget, vulputate aliquam nisi ex gravida neque tempus. sit aliquam sit nullam neque ultrices.',
    image: '/images/banners/marine-plate.png',
    direction: 'text-image',
  };

  protected readonly teamMembers = [
    {
      name: 'Bernie Patterson',
      designation: 'CEO & Founder',
      image: '/images/team/bernie-patterson.png',
    },
    {
      name: 'Ophelia Vase',
      designation: 'Creative Director',
      image: '/images/team/ophelia-vase.png',
    },
    {
      name: 'Corbin Hossain',
      designation: 'Artist',
      image: '/images/team/corbin-hossain.png',
    },
    {
      name: 'Seren Bowl',
      designation: 'Marketing',
      image: '/images/team/seren-bowl.png',
    },
  ];
}

