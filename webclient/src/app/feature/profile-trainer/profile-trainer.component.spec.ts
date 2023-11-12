import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfileTrainerComponent} from './profile-trainer.component';

describe('ProfileTrainerComponent', () => {
  let component: ProfileTrainerComponent;
  let fixture: ComponentFixture<ProfileTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileTrainerComponent]
    });
    fixture = TestBed.createComponent(ProfileTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
