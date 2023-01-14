import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationParkingLotComponent } from './reservation-parking-lot.component';

describe('ReservationParkingLotComponent', () => {
  let component: ReservationParkingLotComponent;
  let fixture: ComponentFixture<ReservationParkingLotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationParkingLotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
