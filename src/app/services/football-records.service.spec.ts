/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootballRecordsService } from './football-records.service';

describe('Service: FootballRecords', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootballRecordsService]
    });
  });

  it('should ...', inject([FootballRecordsService], (service: FootballRecordsService) => {
    expect(service).toBeTruthy();
  }));
});
