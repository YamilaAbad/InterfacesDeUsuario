import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoComoJugarComponent } from './juego-como-jugar.component';

describe('JuegoComoJugarComponent', () => {
  let component: JuegoComoJugarComponent;
  let fixture: ComponentFixture<JuegoComoJugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoComoJugarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoComoJugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
