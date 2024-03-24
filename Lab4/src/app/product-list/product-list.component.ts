import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(productUrl: string) {
    const text = encodeURIComponent(`Check out this product: ${productUrl}`);
    window.open(`https://t.me/share/url?url=${productUrl}&text=${text}`, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
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
