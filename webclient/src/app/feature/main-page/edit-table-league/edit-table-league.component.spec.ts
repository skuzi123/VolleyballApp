import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTableLeagueComponent } from './edit-table-league.component';

describe('EditTableLeagueComponent', () => {
  let component: EditTableLeagueComponent;
  let fixture: ComponentFixture<EditTableLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTableLeagueComponent]
    });
    fixture = TestBed.createComponent(EditTableLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
