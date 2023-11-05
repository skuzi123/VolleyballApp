import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableLeagueComponent} from './table-league.component';

describe('TableLeagueComponent', () => {
  let component: TableLeagueComponent;
  let fixture: ComponentFixture<TableLeagueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableLeagueComponent]
    });
    fixture = TestBed.createComponent(TableLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
