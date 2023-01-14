import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableHerediaComponent } from './parking-table-heredia.component';

describe('ParkingTableHerediaComponent', () => {
  let component: ParkingTableHerediaComponent;
  let fixture: ComponentFixture<ParkingTableHerediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTableHerediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableHerediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
