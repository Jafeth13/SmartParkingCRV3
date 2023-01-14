import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingLTComponent } from './parking-lt.component';

describe('ParkingLTComponent', () => {
  let component: ParkingLTComponent;
  let fixture: ComponentFixture<ParkingLTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingLTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingLTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
