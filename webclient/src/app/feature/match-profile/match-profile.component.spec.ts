import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchProfileComponent } from './match-profile.component';

describe('MatchProfileComponent', () => {
  let component: MatchProfileComponent;
  let fixture: ComponentFixture<MatchProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchProfileComponent]
    });
    fixture = TestBed.createComponent(MatchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
