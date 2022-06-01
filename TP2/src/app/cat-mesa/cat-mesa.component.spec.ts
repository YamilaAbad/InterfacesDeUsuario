import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatMesaComponent } from './cat-mesa.component';

describe('CatMesaComponent', () => {
  let component: CatMesaComponent;
  let fixture: ComponentFixture<CatMesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatMesaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatMesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
