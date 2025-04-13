import { Routes } from '@angular/router';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';

export const routes: Routes = [
    {
        path: 'companies', 
        component: CompaniesListComponent
    },
    {
        path: "companies/:id",
        component: CompanyDetailsComponent
    }
];
