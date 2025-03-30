import { Component} from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-deatils',
  imports: [],
  templateUrl: './product-deatils.component.html',
  styleUrl: './product-deatils.component.css'
})
export class ProductDeatilsComponent {
  product:Product|null = null;

  constructor(
    private route: ActivatedRoute,
    private productData:ProductDataService,
    
  ){}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id')); 
    if (!isNaN(productId)) {
      
      this.productData.getProduct(productId).subscribe(product => {
        console.log("Product retrieved:", product);
        this.product = product;
        
      });
    }
  }
  
}
