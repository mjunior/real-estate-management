/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DealsDataService } from './deals-data.service';

describe('Service: DealsData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DealsDataService]
    });
  });

  it('should ...', inject([DealsDataService], (service: DealsDataService) => {
    expect(service).toBeTruthy();
  }));
});
