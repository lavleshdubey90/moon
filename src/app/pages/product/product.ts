import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../../components/shared/breadcrumb/breadcrumb';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from "../../components/shared/product-card/product-card";

interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  color: string;
  slug: string;
}

@Component({
  selector: 'app-product',
  imports: [Breadcrumb, CurrencyPipe, ProductCard],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  protected breadcrumbItems: { label: string; url?: string }[] = [];
  protected colors: string[] = ['#C69B7B', '#000000', '#8B7355', '#D4C4A8'];
  protected readonly relatedProducts: ProductType[] = [
    {
      id: 1,
      name: 'Small Ecru Ceramic Compote',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
      price: 8.99,
      image: '/images/products/product-1.png',
      category: 'Ceramic',
      color: '#C69B7B',
      slug: 'small-ecru-ceramic-compote'
    },
    {
      id: 2,
      name: 'Warrick White Vase 14"',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 125.50,
      image: '/images/products/product-2.png',
      category: 'Decor Art',
      color: '#FFFFFF',
      slug: 'warrick-white-vase-14'
    },
    {
      id: 3,
      name: 'Porcelain Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit .',
      price: 35.75,
      image: '/images/products/product-3.png',
      category: 'Dinnerware',
      color: '#FFFFFF',
      slug: 'porcelain-dinner-plate'
    },
    {
      id: 4,
      name: 'Warrick White Vase 20',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 189.99,
      image: '/images/products/product-4.png',
      category: 'Decor Art',
      color: '#FFFFFF',
      slug: 'warrick-white-vase-20'
    },
    {
      id: 5,
      name: 'Rounded Dual Handled Vase',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 67.25,
      image: '/images/products/product-5.png',
      category: 'Decor Art',
      color: '#CCD8CE',
      slug: 'rounded-dual-handled-vase'
    },
    {
      id: 6,
      name: 'Marin White Dinner Plate',
      description: 'Lorem ipsum dolor sit amet conse.',
      price: 42.50,
      image: '/images/products/product-6.png',
      category: 'Dinnerware',
      color: '#FFFFFF',
      slug: 'marin-white-dinner-plate'
    },
    {
      id: 7,
      name: 'Tall Cream Ceramic Vase',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
      price: 95.00,
      image: '/images/products/product-7.png',
      category: 'Ceramic',
      color: '#C69B7B',
      slug: 'tall-cream-ceramic-vase'
    },
    {
      id: 8,
      name: 'Luana Bowl',
      description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
      price: 250.00,
      image: '/images/products/product-8.png',
      category: 'Decor Art',
      color: '#B4555D',
      slug: 'luana-bowl'
    },
  ];
  protected product: ProductType | null | undefined = null;
  protected singleProductImages: string[] = [
    '/images/products/single-product-images/image-1.png',
    '/images/products/single-product-images/image-2.png',
    '/images/products/single-product-images/image-3.png',
    '/images/products/single-product-images/image-4.png',
    '/images/products/single-product-images/image-5.png',
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productSlug = params['slug'];
      this.loadProduct(productSlug);
    });
  }

  private loadProduct(slug: string) {
    // Find product from shop products data
    const products = [
      {
        id: 1,
        name: 'Small Ecru Ceramic Compote',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
        price: 8.99,
        image: '/images/products/product-1.png',
        category: 'Ceramic',
        color: '#C69B7B',
        slug: 'small-ecru-ceramic-compote'
      },
      {
        id: 2,
        name: 'Warrick White Vase 14"',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
        price: 125.50,
        image: '/images/products/product-2.png',
        category: 'Decor Art',
        color: '#FFFFFF',
        slug: 'warrick-white-vase-14'
      },
      {
        id: 3,
        name: 'Porcelain Dinner Plate',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit .',
        price: 35.75,
        image: '/images/products/product-3.png',
        category: 'Dinnerware',
        color: '#FFFFFF',
        slug: 'porcelain-dinner-plate'
      },
      {
        id: 4,
        name: 'Warrick White Vase 20',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
        price: 189.99,
        image: '/images/products/product-4.png',
        category: 'Decor Art',
        color: '#FFFFFF',
        slug: 'warrick-white-vase-20'
      },
      {
        id: 5,
        name: 'Rounded Dual Handled Vase',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
        price: 67.25,
        image: '/images/products/product-5.png',
        category: 'Decor Art',
        color: '#CCD8CE',
        slug: 'rounded-dual-handled-vase'
      },
      {
        id: 6,
        name: 'Marin White Dinner Plate',
        description: 'Lorem ipsum dolor sit amet conse.',
        price: 42.50,
        image: '/images/products/product-6.png',
        category: 'Dinnerware',
        color: '#FFFFFF',
        slug: 'marin-white-dinner-plate'
      },
      {
        id: 7,
        name: 'Tall Cream Ceramic Vase',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
        price: 95.00,
        image: '/images/products/product-7.png',
        category: 'Ceramic',
        color: '#C69B7B',
        slug: 'tall-cream-ceramic-vase'
      },
      {
        id: 8,
        name: 'Luana Bowl',
        description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit tortor eu.',
        price: 250.00,
        image: '/images/products/product-8.png',
        category: 'Decor Art',
        color: '#B4555D',
        slug: 'luana-bowl'
      }
    ];

    this.product = products.find(p => p.slug === slug);

    if (this.product) {
      this.breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Shop', url: '/shop' },
        { label: this.product.name }
      ];
    } else {
      this.breadcrumbItems = [
        { label: 'Home', url: '/' },
        { label: 'Shop', url: '/shop' },
        { label: 'Product Not Found' }
      ];
    }
  }
}
