import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePlayerComponent} from './profile-player.component';

describe('ProfilePlayerComponent', () => {
  let component: ProfilePlayerComponent;
  let fixture: ComponentFixture<ProfilePlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilePlayerComponent]
    });
    fixture = TestBed.createComponent(ProfilePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
