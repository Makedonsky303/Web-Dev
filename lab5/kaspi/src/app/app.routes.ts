import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductListByCategoryComponent } from './product-list-by-category/product-list-by-category.component';

const routeConfig: Routes = [

    {
        path:'products',
        component: ProductListComponent,
    },
    {
        path:'products/:id',
        component: ProductDeatilsComponent,
    },
    {
        path:'categories',
        component: CategoryListComponent
    },
    {
        path:'categories/:id',
        component: CategoryDetailsComponent
    },
    {
        path:'categories/:id/products',
        component: ProductListByCategoryComponent
    }
];

export default routeConfig;
