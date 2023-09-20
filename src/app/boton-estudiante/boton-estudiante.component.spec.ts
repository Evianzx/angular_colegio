import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEstudianteComponent } from './boton-estudiante.component';

describe('BotonEstudianteComponent', () => {
  let component: BotonEstudianteComponent;
  let fixture: ComponentFixture<BotonEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonEstudianteComponent]
    });
    fixture = TestBed.createComponent(BotonEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
