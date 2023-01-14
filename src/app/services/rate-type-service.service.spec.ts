import { TestBed } from '@angular/core/testing';

import { RateTypeServiceService } from './rate-type-service.service';

describe('RateTypeServiceService', () => {
  let service: RateTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
