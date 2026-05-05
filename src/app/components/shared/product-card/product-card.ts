import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product: Product = {
    id: 0,
    name: '',
    price: 0,
    image: '',
    description: ''
  };
}
