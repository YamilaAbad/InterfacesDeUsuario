import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRolComponent } from './cat-rol.component';

describe('CatRolComponent', () => {
  let component: CatRolComponent;
  let fixture: ComponentFixture<CatRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
