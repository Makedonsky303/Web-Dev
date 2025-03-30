import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDataService } from '../product-data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list-by-category',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list-by-category.component.html',
  styleUrl: './product-list-by-category.component.css'
})
export class ProductListByCategoryComponent {
  categoryId: number = 0;
  categoryName: String = "";
  productList: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductDataService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryId = Number(params.get('id'));

      this.productService.getCategory(this.categoryId).subscribe(category => {
        this.categoryName = category.name
      })

      this.productService.getProductsByCategory(this.categoryId).subscribe(data => {
        this.productList = data;
      });
    });
  }
}
