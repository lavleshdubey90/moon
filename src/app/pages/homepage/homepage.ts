import { Component } from '@angular/core';
import { Discount } from '../../components/shared/discount/discount';
import { ProductCard } from '../../components/shared/product-card/product-card';

@Component({
  selector: 'app-homepage',
  imports: [Discount, ProductCard],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  protected readonly categories = [
    { name: 'Tableware', image: '/images/categories/tableware.png' },
    { name: 'Home decor', image: '/images/categories/home-decor.png' },
    { name: 'Holiday', image: '/images/categories/holiday.png' },
    { name: 'Collection', image: '/images/categories/collection.png' },
  ];

  protected readonly bestSellers = [
    {
      id: 1,
      name: 'Small Ecru Ceramic Compote',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
      price: 49.00,
      image: '/images/products/product-1.png',
    },
    {
      id: 2,
      name: 'Warrick White Vase 14"',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-2.png',
    },
    {
      id: 3,
      name: 'Porcelain Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur .',
      price: 49.00,
      image: '/images/products/product-3.png',
    },
    {
      id: 4,
      name: 'Warrick White Vase 20',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-4.png',
    },
    {
      id: 5,
      name: 'Rounded Dual Handled Vase',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-5.png',
    },
    {
      id: 6,
      name: 'Marin White Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse.',
      price: 49.00,
      image: '/images/products/product-6.png',
    },
    {
      id: 7,
      name: 'Tall Cream Ceramic Vase',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
      price: 49.00,
      image: '/images/products/product-7.png',
    },
    {
      id: 8,
      name: 'Luana Bowl',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-8.png',
    },
  ];
}
