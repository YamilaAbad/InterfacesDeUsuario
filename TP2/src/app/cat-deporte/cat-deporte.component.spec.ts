import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDeporteComponent } from './cat-deporte.component';

describe('CatDeporteComponent', () => {
  let component: CatDeporteComponent;
  let fixture: ComponentFixture<CatDeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatDeporteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
