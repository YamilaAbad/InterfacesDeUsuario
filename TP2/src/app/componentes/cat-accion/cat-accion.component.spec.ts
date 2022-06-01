import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAccionComponent } from './cat-accion.component';

describe('CatAccionComponent', () => {
  let component: CatAccionComponent;
  let fixture: ComponentFixture<CatAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
