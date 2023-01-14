import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVehicleClientComponent } from './user-vehicle-client.component';

describe('UserVehicleClientComponent', () => {
  let component: UserVehicleClientComponent;
  let fixture: ComponentFixture<UserVehicleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVehicleClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVehicleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
