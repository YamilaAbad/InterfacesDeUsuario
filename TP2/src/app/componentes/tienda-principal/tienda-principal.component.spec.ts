import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaPrincipalComponent } from './tienda-principal.component';

describe('TiendaPrincipalComponent', () => {
  let component: TiendaPrincipalComponent;
  let fixture: ComponentFixture<TiendaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
