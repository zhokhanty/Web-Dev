import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vacancy } from '../../interfaces/vacancy';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class VacancyDetailsService {
  private url = 'vacancies/'

  constructor(private http: HttpClient) { }

  getVacancy(id: number): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${'http://127.0.0.1:8000/api/'}${this.url}${id}`)
  }
  getCompanyName(id: number): Observable<Company> {
    return this.http.get<Company>(`${'http://127.0.0.1:8000/api/companies/'}${id}`)
  }
}
