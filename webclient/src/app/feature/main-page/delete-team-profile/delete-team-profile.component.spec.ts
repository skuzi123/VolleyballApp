import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTeamProfileComponent } from './delete-team-profile.component';

describe('DeleteTeamProfileComponent', () => {
  let component: DeleteTeamProfileComponent;
  let fixture: ComponentFixture<DeleteTeamProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTeamProfileComponent]
    });
    fixture = TestBed.createComponent(DeleteTeamProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
