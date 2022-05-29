import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFondoComponent } from './login-fondo.component';

describe('LoginFondoComponent', () => {
  let component: LoginFondoComponent;
  let fixture: ComponentFixture<LoginFondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
