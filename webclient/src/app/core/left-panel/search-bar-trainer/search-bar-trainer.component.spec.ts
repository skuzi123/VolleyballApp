import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarTrainerComponent } from './search-bar-trainer.component';

describe('SearchBarTrainerComponent', () => {
  let component: SearchBarTrainerComponent;
  let fixture: ComponentFixture<SearchBarTrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarTrainerComponent]
    });
    fixture = TestBed.createComponent(SearchBarTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
