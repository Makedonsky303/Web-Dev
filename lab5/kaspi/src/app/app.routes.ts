import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';

const routeConfig: Routes = [

    {
        path:'products',
        component: ProductListComponent,
    },
    {
        path:'products/:id',
        component: ProductDeatilsComponent,
    },
];

export default routeConfig;
