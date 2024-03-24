// product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, categories } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  likeProduct() {
    if (this.product) {
      this.product.likes++;
    }
  }

  removeProduct(product: Product) {
    const categoryContainingProduct = categories.find(category =>
      category.products.some(p => p.id === product.id)
    );
  
    if (categoryContainingProduct) {
      categoryContainingProduct.products = categoryContainingProduct.products.filter(
        p => p.id !== product.id
      );
    }
  }
  

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product with the given id.
    for (const cat of categories) {
      const product = cat.products.find(prod => prod.id === productIdFromRoute);
      if (product) {
        // Assign the product to the component property.
        this.product = product;
        break;
      }
    }
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
