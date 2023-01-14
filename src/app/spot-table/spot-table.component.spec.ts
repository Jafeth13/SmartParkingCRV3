import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotTableComponent } from './spot-table.component';

describe('SpotTableComponent', () => {
  let component: SpotTableComponent;
  let fixture: ComponentFixture<SpotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
