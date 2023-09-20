import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonDocenteComponent } from './boton-docente.component';

describe('BotonDocenteComponent', () => {
  let component: BotonDocenteComponent;
  let fixture: ComponentFixture<BotonDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonDocenteComponent]
    });
    fixture = TestBed.createComponent(BotonDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
