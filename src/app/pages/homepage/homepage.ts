import { Component } from '@angular/core';
import { BrandStory, BrandStoryBanner } from '../../components/shared/brand-story/brand-story';
import { ProductCard } from '../../components/shared/product-card/product-card';

@Component({
  selector: 'app-homepage',
  imports: [BrandStory, ProductCard],
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

  protected readonly discount: BrandStoryBanner = {
    title: 'Up to 40% off our Christmas collection',
    alt: 'Christmas Discount',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: '/images/banners/christmas.png',
    link: {
      url: '/shop',
      text: 'Shop Now',
    },
    direction: 'text-image',
  };

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

  protected readonly origin: BrandStoryBanner = {
    title: 'Made in viet Nam since 1450',
    alt: 'Pot painting',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: '/images/banners/pot-painting.png',
    link: {
      url: '#',
      text: 'Learn More',
    },
    direction: 'text-image',
  };

  protected readonly ourHistory: BrandStoryBanner = {
    title: 'Our History',
    alt: 'Pottery wheel',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit',
    image: '/images/banners/pottery-wheel.png',
    link: {
      url: '#',
      text: 'Learn More',
    },
    direction: 'image-text',
  };

  protected readonly newArrivals = [
    {
      id: 1,
      name: 'Porcelain Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-9.png',
    },
    {
      id: 2,
      name: 'Ophelia Matte Natural Vase',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur.',
      price: 49.00,
      image: '/images/products/product-10.png',
    },
    {
      id: 3,
      name: 'Porcelain Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 49.00,
      image: '/images/products/product-11.png',
    },
    {
      id: 4,
      name: 'Luana Bowl',
      description: 'Lorem ipsum dolor sit amet conse.',
      price: 49.00,
      image: '/images/products/product-12.png',
    }
  ];

  protected readonly ourBlog: BrandStoryBanner = {
    caption: 'TableWare',
    title: 'The secrets to a kitchen room',
    alt: 'Blog image',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.',
    image: '/images/banners/dining.png',
    link: {
      url: '#',
      text: 'Read More',
    },
    direction: 'text-image',
  };
}
