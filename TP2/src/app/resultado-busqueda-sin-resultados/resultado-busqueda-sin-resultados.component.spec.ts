import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBusquedaSinResultadosComponent } from './resultado-busqueda-sin-resultados.component';

describe('ResultadoBusquedaSinResultadosComponent', () => {
  let component: ResultadoBusquedaSinResultadosComponent;
  let fixture: ComponentFixture<ResultadoBusquedaSinResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoBusquedaSinResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBusquedaSinResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
