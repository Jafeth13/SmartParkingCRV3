import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSelectionTableComponent } from './parking-selection-table.component';

describe('ParkingSelectionTableComponent', () => {
  let component: ParkingSelectionTableComponent;
  let fixture: ComponentFixture<ParkingSelectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingSelectionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingSelectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
