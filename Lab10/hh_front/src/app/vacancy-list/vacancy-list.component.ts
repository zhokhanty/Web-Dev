import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Vacancy } from '../interfaces/vacancy';
import { VacancyListService } from './services/vacancy-list.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent {
  vacancies: Vacancy[] = []

  constructor(private http: VacancyListService, private location: Location) { }

  ngOnInit(){
    this.http.getVacancies().subscribe((data) =>{
      console.log(data)
      this.vacancies = data
    })
  }

  back(){
    this.location.back()
  }
}
