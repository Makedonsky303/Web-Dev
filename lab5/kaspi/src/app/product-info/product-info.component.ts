import { Component,inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from '../product-info';

@Component({
  standalone: true,
  selector: 'app-product-info',
  imports: [CommonModule],
  templateUrl:'./product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {

  
  route: ActivatedRoute = inject(ActivatedRoute);
  
  categoryId = 1;

  constructor(){
    this.categoryId = Number(this.route.snapshot.params['id'])
  }
}
