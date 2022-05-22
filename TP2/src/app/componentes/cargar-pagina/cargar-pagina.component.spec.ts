import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPaginaComponent } from './cargar-pagina.component';

describe('CargarPaginaComponent', () => {
  let component: CargarPaginaComponent;
  let fixture: ComponentFixture<CargarPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
