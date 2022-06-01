import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCarreraComponent } from './cat-carrera.component';

describe('CatCarreraComponent', () => {
  let component: CatCarreraComponent;
  let fixture: ComponentFixture<CatCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
