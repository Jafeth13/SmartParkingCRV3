import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmartComponent } from './home-smart.component';

describe('HomeSmartComponent', () => {
  let component: HomeSmartComponent;
  let fixture: ComponentFixture<HomeSmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSmartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
