import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoComponent } from '../product-info/product-info.component';
import { ProductInfo } from '../product-info';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule,ProductInfoComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    productList: ProductInfo[] = [

      {
        "photo": "megaminx_1.jpg",
        "name": "Megaminx",
        "description": "Made of plastic",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-zerde-toys-plastik-120867052/?c=750000000"
      },
      {
        "photo": "photo",
        "name": "name",
        "description": "desc",
        "rating": 5,
        "link": "link"
      }

    ];
}
