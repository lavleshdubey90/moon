import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/homepage/homepage').then(m => m.Homepage)
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.About)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
    },
    {
        path: 'blogs',
        loadComponent: () => import('./pages/blogs/blogs').then(m => m.Blogs)
    },
    {
        path: 'shop',
        loadComponent: () => import('./pages/shop/shop').then(m => m.Shop)
    },
    {
        path: 'product/:slug',
        loadComponent: () => import('./pages/product/product').then(m => m.Product)
    },
    {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then(m => m.Cart)
    },
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout').then(m => m.Checkout)
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound)
    }
];
