import { TestBed } from '@angular/core/testing';

import { VacancyDetailsService } from './vacancy-details.service';

describe('VacancyDetailsService', () => {
  let service: VacancyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
