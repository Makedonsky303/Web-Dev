import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Company } from '../interfaces/company';
import { Vacancy } from '../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "http://127.0.0.1:8000/api/";

  constructor( private http: HttpClient){}

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}vacancies/`);
  }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.apiUrl}vacancies/${id}`);
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}companies`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}companies/${id}`);
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.apiUrl}companies/${id}/vacancies`);
  }
}
