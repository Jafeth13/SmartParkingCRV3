import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalOperatorComponent } from './principal-operator.component';

describe('PrincipalOperatorComponent', () => {
  let component: PrincipalOperatorComponent;
  let fixture: ComponentFixture<PrincipalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
