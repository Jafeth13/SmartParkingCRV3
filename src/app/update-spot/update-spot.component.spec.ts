import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpotComponent } from './update-spot.component';

describe('UpdateSpotComponent', () => {
  let component: UpdateSpotComponent;
  let fixture: ComponentFixture<UpdateSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSpotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
