import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatAventuraComponent } from './cat-aventura.component';

describe('CatAventuraComponent', () => {
  let component: CatAventuraComponent;
  let fixture: ComponentFixture<CatAventuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatAventuraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatAventuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
