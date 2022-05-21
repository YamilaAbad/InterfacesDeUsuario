import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonNeonComponent } from './boton-neon.component';

describe('BotonNeonComponent', () => {
  let component: BotonNeonComponent;
  let fixture: ComponentFixture<BotonNeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonNeonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonNeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
