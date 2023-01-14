import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetypeCreateComponent } from './ratetype-create.component';

describe('RatetypeCreateComponent', () => {
  let component: RatetypeCreateComponent;
  let fixture: ComponentFixture<RatetypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
