import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Vacancy } from '../../interfaces/vacancy';

@Component({
  selector: 'app-company-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  vacanciesList: Vacancy[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ){ }

    ngOnInit(): void {
      const companyId = Number(this.route.snapshot.paramMap.get('id')); 

      if (!isNaN(companyId)) {
        this.dataService.getVacanciesByCompany(companyId).subscribe(data => {
          this.vacanciesList = data;
        });
      }
    }

}
