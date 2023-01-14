import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableGuanacasteComponent } from './parking-table-guanacaste.component';

describe('ParkingTableGuanacasteComponent', () => {
  let component: ParkingTableGuanacasteComponent;
  let fixture: ComponentFixture<ParkingTableGuanacasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTableGuanacasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableGuanacasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
