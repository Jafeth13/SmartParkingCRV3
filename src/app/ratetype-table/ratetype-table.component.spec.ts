import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatetypeTableComponent } from './ratetype-table.component';

describe('RatetypeTableComponent', () => {
  let component: RatetypeTableComponent;
  let fixture: ComponentFixture<RatetypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatetypeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatetypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
