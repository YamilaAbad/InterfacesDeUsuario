import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoEjecutandoComponent } from './juego-ejecutando.component';

describe('JuegoEjecutandoComponent', () => {
  let component: JuegoEjecutandoComponent;
  let fixture: ComponentFixture<JuegoEjecutandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoEjecutandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoEjecutandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
