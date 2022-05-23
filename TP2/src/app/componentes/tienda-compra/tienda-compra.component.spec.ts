import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCompraComponent } from './tienda-compra.component';

describe('TiendaCompraComponent', () => {
  let component: TiendaCompraComponent;
  let fixture: ComponentFixture<TiendaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
