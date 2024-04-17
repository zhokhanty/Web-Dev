import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyListService {
  private url = "companies"

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${"http://127.0.0.1:8000/api/"}${this.url}`)
  }
}
