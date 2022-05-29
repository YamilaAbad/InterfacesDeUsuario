import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCrearCuentaComponent } from './login-crear-cuenta.component';

describe('LoginCrearCuentaComponent', () => {
  let component: LoginCrearCuentaComponent;
  let fixture: ComponentFixture<LoginCrearCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCrearCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
