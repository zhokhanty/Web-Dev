import { Component } from '@angular/core';
import { Company } from '../interfaces/company';
import { CompanyListService } from './services/company-list.service';
import { RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent {
  companies: Company[] = []

  constructor(private http: CompanyListService, private location: Location){}

  ngOnInit(){
    this.http.getCompanies().subscribe((data) =>{
      console.log(data)
      this.companies = data
    })
  }

  back(){
    this.location.back()
  }

}
