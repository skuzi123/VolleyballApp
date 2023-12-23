import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamProfileComponent } from './add-team-profile.component';

describe('AddTeamProfileComponent', () => {
  let component: AddTeamProfileComponent;
  let fixture: ComponentFixture<AddTeamProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTeamProfileComponent]
    });
    fixture = TestBed.createComponent(AddTeamProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
