import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgNavbarComponent } from './ig-navbar.component';

describe('IgNavbarComponent', () => {
  let component: IgNavbarComponent;
  let fixture: ComponentFixture<IgNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IgNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
