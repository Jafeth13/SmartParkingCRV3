import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingTablePuntarenasComponent } from './parking-table-puntarenas.component';

describe('ParkingTablePuntarenasComponent', () => {
  let component: ParkingTablePuntarenasComponent;
  let fixture: ComponentFixture<ParkingTablePuntarenasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingTablePuntarenasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingTablePuntarenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
