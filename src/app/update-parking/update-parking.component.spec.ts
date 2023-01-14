import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingComponent } from './update-parking.component';

describe('UpdateParkingComponent', () => {
  let component: UpdateParkingComponent;
  let fixture: ComponentFixture<UpdateParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
