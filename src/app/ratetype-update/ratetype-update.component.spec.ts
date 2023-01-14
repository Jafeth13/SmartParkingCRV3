import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetypeUpdateComponent } from './ratetype-update.component';

describe('RatetypeUpdateComponent', () => {
  let component: RatetypeUpdateComponent;
  let fixture: ComponentFixture<RatetypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
