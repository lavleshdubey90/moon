import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly logo = 'svgs/logo.svg';
  protected readonly links = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];
  protected readonly icons = [
    { name: 'search', path: 'icons/search.svg', alt: 'Search', url: '#' },
    { name: 'heart', path: 'icons/heart.svg', alt: 'Heart', url: '#' },
    { name: 'shopping-cart', path: 'icons/shopping-cart.svg', alt: 'Shopping Cart', url: '/cart' },
    { name: 'avatar', path: 'icons/avatar.svg', alt: 'Avatar', url: '#' },
  ];
}
