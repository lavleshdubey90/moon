import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  protected readonly categories = [
    { name: 'Tableware', image: '/images/cards/tableware.png' },
    { name: 'Home decor', image: '/images/cards/home-decor.png' },
    { name: 'Holiday', image: '/images/cards/holiday.png' },
    { name: 'Collection', image: '/images/cards/collection.png' },
  ];
}
