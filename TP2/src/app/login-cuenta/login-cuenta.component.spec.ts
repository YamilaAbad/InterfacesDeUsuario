import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCuentaComponent } from './login-cuenta.component';

describe('LoginCuentaComponent', () => {
  let component: LoginCuentaComponent;
  let fixture: ComponentFixture<LoginCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
