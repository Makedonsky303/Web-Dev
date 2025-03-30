import { Component } from '@angular/core';
import { Category } from '../category';
import { ProductDataService } from '../product-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  categoryList: Category[] = [];
  
      constructor(private productService: ProductDataService){ }
  
      ngOnInit(): void {
        this.productService.getCategories().subscribe(data => {
          this.categoryList = data;
          console.log(data);
        });
      }
}
