import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  getRatingColor(rating: number): string {
    return "orange";
  }
  
  generateStars(rating: number): string {
    const roundedRating = Math.round(rating * 2) / 2;
    const numFullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating - numFullStars === 0.5;

    let stars = '';

    for (let i = 0; i < numFullStars; i++) {
      stars += '★';
    }

    if (hasHalfStar) {
      stars += '½'; 
    }

    const totalStars = 5;
    const remainingStars = totalStars - numFullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars += '☆';
    }

    return stars;
  }
}
