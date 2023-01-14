import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableSanJoseComponent } from './parking-table-san-jose.component';

describe('ParkingTableSanJoseComponent', () => {
  let component: ParkingTableSanJoseComponent;
  let fixture: ComponentFixture<ParkingTableSanJoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTableSanJoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableSanJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
