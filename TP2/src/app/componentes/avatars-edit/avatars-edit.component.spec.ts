import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarsEditComponent } from './avatars-edit.component';

describe('AvatarsEditComponent', () => {
  let component: AvatarsEditComponent;
  let fixture: ComponentFixture<AvatarsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
