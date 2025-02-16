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
        "name": "Мегаминск",
        "description": "Сделан из пластика",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-zerde-toys-plastik-120867052/?c=750000000"
      },
      {
        "photo": "QiYi5by5.jpg",
        "name": "Кубик Рубика QiYi MoFangGe WuShuang 5x5",
        "description": "Мультиколор, без магнитов",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-golovolomka-qiyi-mofangge-wushuang-5x5-47011-2-mul-tikolor-bez-magnitov-112908453/?c=750000000"
      },
      {
        "photo": "GAN_Speedcube.jpg",
        "name": "Кубик Рубика GAN Speedcube",
        "description": "Пластиковый кубик Рубика размером 5.6x5.6x5.6 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-gan-speedcube-plastik-112153487/"
      },
      {
        "photo": "GAN_356M.jpg",
        "name": "Кубик Рубика GAN 356M магнитный",
        "description": "Магнитный кубик Рубика 5.6x5.6x5.6 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-gan-356m-magnitnyi-109783051/"
      },
      {
        "photo": "QiYi_2x2.jpg",
        "name": "Головоломка QiYi Toys Кубик Рубика 2x2 QiDi (S)",
        "description": "Пластиковый кубик 5х5х5 см, подходит для всех",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/golovolomka-qiyi-toys-kubik-rubika-2h2-qidi-s-plastik-100068556/"
      },
      {
        "photo": "QiYi_3x3.jpeg",
        "name": "Кубик Рубика QiYi Toys головоломка пластик",
        "description": "Пластиковый кубик 5.6х5.6х5.6 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-qiyi-toys-golovolomka-plastik-117038999/"
      },
      {
        "photo": "GAN_356M_Lite.jpg",
        "name": "Кубик Рубика GAN 356M lite",
        "description": "Пластиковый кубик 5.6x5.6x5.6 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/gan-kubik-rubika-3x3-356m-lite-108060916/"
      },
      {
        "photo": "GAN_356XS.jpg",
        "name": "Магнитный Кубик Рубика 3x3 GAN356 XS Magnetic",
        "description": "Магнитный кубик 10х15 см, пластик и металл",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/gan-magnitnyi-kubik-rubika-3x3-gan356-xs-magnetic-108482609/"
      },
      {
        "photo": "QiYi_White.jpg",
        "name": "Кубик Рубика QiYi Toys головоломка пластик",
        "description": "Белый-оранжевый кубик 6х3 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/kubik-rubika-qiyi-toys-golovolomka-plastik-112816782/"
      },
      {
        "photo": "GAN_356M_Multicolor.jpg",
        "name": "Кубик Рубика GAN 356 M мультиколор",
        "description": "Пластиковый кубик 5.6x5.6x5.6 см",
        "rating": 5,
        "link": "https://kaspi.kz/shop/p/gan-kubik-rubika-3x3-356-m-mul-tikolor-108060858/"
      }
      
      

    ];
}
