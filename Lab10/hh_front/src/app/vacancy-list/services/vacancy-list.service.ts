import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacancy } from '../../interfaces/vacancy';

@Injectable({
  providedIn: 'root'
})
export class VacancyListService {
  private url = 'vacancies'

  constructor(private http: HttpClient) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${"http://127.0.0.1:8000/api/"}${this.url}`)
  }
}
