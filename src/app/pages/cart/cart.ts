import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Breadcrumb } from '../../components/shared/breadcrumb/breadcrumb';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule, Breadcrumb, CurrencyPipe],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  protected readonly breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'Cart' }
  ];

  protected cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Porcelain Dinner Plate (27cm)',
      price: 70.00,
      quantity: 1,
      image: '/images/products/product-3.png'
    },
    {
      id: 2,
      name: 'Valo Matte White Vase',
      price: 125.00,
      quantity: 1,
      image: '/images/products/product-2.png'
    },
    {
      id: 3,
      name: 'Porcelain Dinner Plate',
      price: 70.00,
      quantity: 1,
      image: '/images/products/product-3.png'
    }
  ];

  protected couponCode: string = '';

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get total(): number {
    return this.subtotal + 35; // Adding shipping cost
  }

  get itemCount(): number {
    return this.cartItems.length;
  }

  updateQuantity(itemId: number, change: number): void {
    const item = this.cartItems.find(i => i.id === itemId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + change);
    }
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(i => i.id !== itemId);
  }

  applyCoupon(): void {
    console.log('Applying coupon:', this.couponCode);
  }

  updateCart(): void {
    console.log('Updating cart');
  }

  proceedToCheckout(): void {
    console.log('Proceeding to checkout');
  }
}
