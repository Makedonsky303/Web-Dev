import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfo } from '../product-info';

@Component({
  standalone: true,
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl:'./product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
    @Input() productInfo!: ProductInfo;
}
