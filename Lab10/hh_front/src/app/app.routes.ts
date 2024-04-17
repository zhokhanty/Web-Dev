import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'Home'},
    { path: 'companies', component: CompanyListComponent, title: 'Company List' },
    { path: 'vacancies', component: VacancyListComponent, title: 'Vacancy List' },
    { path: 'companies/:id', component: CompanyDetailsComponent, title: 'Company Details' },
    { path: 'vacancies/:id', component: VacancyDetailsComponent, title: 'Vacancy Details' }
];
