import { Component} from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [ProductListComponent],
  templateUrl:'./home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    
}
