import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  slug: string;
}

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: '',
    slug: ''
  };
}
