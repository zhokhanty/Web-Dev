import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';
import { Vacancy } from '../../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class CompanyDetailsService {
  private url = "companies/"

  constructor(private http: HttpClient) { }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${'http://127.0.0.1:8000/api/'}${this.url}${id}`)
  }

  getVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${'http://127.0.0.1:8000/api/'}${this.url}${id}${'/vacancies'}`);
  }

}
