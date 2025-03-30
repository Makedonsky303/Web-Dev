import { Component } from '@angular/core';
import { Category } from '../category';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-details',
  imports: [RouterModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {
  category:Category|null = null;
  
    constructor(
      private route: ActivatedRoute,
      private productData:ProductDataService,
      
    ){}
  
    ngOnInit(): void {
      const categoryId = Number(this.route.snapshot.paramMap.get('id')); 
      if (!isNaN(categoryId)) {
        
        this.productData.getCategory(categoryId).subscribe(category => {

          this.category = category;
          
        });
      }
    }
}
