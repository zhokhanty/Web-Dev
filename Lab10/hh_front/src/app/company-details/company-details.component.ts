import { Component } from '@angular/core';
import { Company } from '../interfaces/company';
import { CompanyDetailsService } from './services/company-details.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { Vacancy } from '../interfaces/vacancy';

@Component({
  selector: 'app-company-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent {
  vacancies: Vacancy[] = []
  company!: Company;

  constructor(private http: CompanyDetailsService, private location: Location, private route: ActivatedRoute){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.getCompany(id).subscribe((data: Company) => {
      this.company = data;

      if (this.company) {
        this.http.getVacancies(id).subscribe((vacanciesData: Vacancy[]) => {
          this.vacancies = vacanciesData;
        });
      }
    });
  }

  back(){
    this.location.back()
  }

}
