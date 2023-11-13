import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTeamComponent } from './search-bar-team.component';

describe('SearchBarTeamComponent', () => {
  let component: SearchBarTeamComponent;
  let fixture: ComponentFixture<SearchBarTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarTeamComponent]
    });
    fixture = TestBed.createComponent(SearchBarTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
