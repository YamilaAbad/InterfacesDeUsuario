import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarUserComponent } from './avatar-user.component';

describe('AvatarUserComponent', () => {
  let component: AvatarUserComponent;
  let fixture: ComponentFixture<AvatarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
