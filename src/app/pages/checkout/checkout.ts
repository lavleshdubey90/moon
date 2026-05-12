import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Breadcrumb } from '../../components/shared/breadcrumb/breadcrumb';
import { RouterLink } from "@angular/router";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, Breadcrumb, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  protected readonly breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'Cart', url: '/cart' },
    { label: 'Checkout' }
  ];

  protected billingDetails = {
    firstName: '',
    lastName: '',
    companyName: '',
    country: '',
    streetAddress: '',
    apartment: '',
    townCity: '',
    phone: '',
    email: '',
    zipCode: '',
    state: '',
    orderNotes: ''
  };

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

  protected paymentMethod: string = 'bank';
  protected shipping: number = 15;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  placeOrder(): void {
    console.log('Placing order with details:', this.billingDetails);
    console.log('Payment method:', this.paymentMethod);
  }
}
