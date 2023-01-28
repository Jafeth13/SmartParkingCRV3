import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInformationUpdateComponent } from './perfil-information-update.component';

describe('PerfilInformationUpdateComponent', () => {
  let component: PerfilInformationUpdateComponent;
  let fixture: ComponentFixture<PerfilInformationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilInformationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInformationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
