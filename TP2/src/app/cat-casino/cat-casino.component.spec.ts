import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCasinoComponent } from './cat-casino.component';

describe('CatCasinoComponent', () => {
  let component: CatCasinoComponent;
  let fixture: ComponentFixture<CatCasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCasinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
