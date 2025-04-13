import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'app-companies-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './companies-list.component.html',
  styleUrl: './companies-list.component.css'
})
export class CompaniesListComponent {
  companiesList: Company[] = [];

  constructor(private dataService: DataService){ }

    ngOnInit(): void {
      this.dataService.getCompanies().subscribe(data => {
        this.companiesList = data;
        console.log(data);
      });
    }

}
