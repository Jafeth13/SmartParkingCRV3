import { TestBed } from '@angular/core/testing';

import { MyReservationSService } from './my-reservation-s.service';

describe('MyReservationSService', () => {
  let service: MyReservationSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyReservationSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
