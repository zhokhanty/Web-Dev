import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css',
})
export class ProductAlertsComponent {
  @Input() category: Category | undefined;
  @Output() notify = new EventEmitter();
}