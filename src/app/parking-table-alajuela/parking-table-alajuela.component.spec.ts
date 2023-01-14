import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTableAlajuelaComponent } from './parking-table-alajuela.component';

describe('ParkingTableAlajuelaComponent', () => {
  let component: ParkingTableAlajuelaComponent;
  let fixture: ComponentFixture<ParkingTableAlajuelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTableAlajuelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTableAlajuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
