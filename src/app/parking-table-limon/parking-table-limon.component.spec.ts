import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableLimonComponent } from './parking-table-limon.component';

describe('ParkingTableLimonComponent', () => {
  let component: ParkingTableLimonComponent;
  let fixture: ComponentFixture<ParkingTableLimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTableLimonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableLimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
