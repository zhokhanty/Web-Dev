import { Component } from '@angular/core';
import { Vacancy } from '../interfaces/vacancy';
import { VacancyDetailsService } from './services/vacancy-details.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Company } from '../interfaces/company';

@Component({
  selector: 'app-vacancy-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './vacancy-details.component.html',
  styleUrl: './vacancy-details.component.css'
})
export class VacancyDetailsComponent {
  vacancy!: Vacancy
  company!: Company

  constructor(private http: VacancyDetailsService, private location: Location, private route: ActivatedRoute){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.getVacancy(id).subscribe((data: Vacancy) => {
      this.vacancy = data;
      this.retrieveCompanyDetails();
    });
  }

  retrieveCompanyDetails() {
    if (this.vacancy && this.vacancy.company) {
      const companyId = this.vacancy.company;
      this.http.getCompanyName(companyId).subscribe((companyName: Company) => {
        this.company = companyName;
      });
    }
  }

  back(){
    this.location.back()
  }
}
