import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product';

@Component({
  standalone:true,
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl:'product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productList: Product[] = [];

    constructor(private productService: ProductDataService){ }

    ngOnInit(): void {
      this.productService.getProducts().subscribe(data => {
        this.productList = data;
        console.log(data);
      });
    }
}

