import { Component, signal } from '@angular/core';
import { Breadcrumb } from '../../components/shared/breadcrumb/breadcrumb';
import { Filters } from '../../components/shared/filters/filters';
import { ProductCard } from "../../components/shared/product-card/product-card";

@Component({
  selector: 'app-shop',
  imports: [Breadcrumb, Filters, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  protected isFiltersOpen = signal<boolean>(false);
  protected filteredProducts: any[] = [];
  protected currentFilters: any = {
    categories: new Set(),
    priceRanges: new Set()
  };
  protected currentSort: string = 'name';
  protected readonly breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Shop' }
  ];

  protected readonly products = [
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

  ngOnInit() {
    this.filteredProducts = [...this.products];
    this.applySorting();
  }

  onFiltersChanged(filters: any) {
    this.currentFilters = filters;
    this.applyFilters();
  }

  onSortChanged(event: any) {
    this.currentSort = event.target.value;
    this.applySorting();
  }

  private applyFilters() {
    this.filteredProducts = this.products.filter(product => {
      // Category filter
      if (this.currentFilters.categories.size > 0) {
        if (!this.currentFilters.categories.has(product.category)) {
          return false;
        }
      }

      // Price range filter
      if (this.currentFilters.priceRanges.size > 0) {
        const inPriceRange = Array.from(this.currentFilters.priceRanges).some(range => {
          if (range === '$0 - $10') return product.price >= 0 && product.price <= 10;
          if (range === '$10 - $50') return product.price > 10 && product.price <= 50;
          if (range === '$50 - $100') return product.price > 50 && product.price <= 100;
          if (range === '$100 - $200') return product.price > 100 && product.price <= 200;
          if (range === '> $200') return product.price > 200;
          return false;
        });
        if (!inPriceRange) return false;
      }

      return true;
    });
    this.applySorting();
  }

  private applySorting() {
    switch (this.currentSort) {
      case 'name':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'alpha':
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
  }
}
