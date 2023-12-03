import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MatchCarouselComponent} from './match-carousel.component';

describe('MatchCarouselComponent', () => {
  let component: MatchCarouselComponent;
  let fixture: ComponentFixture<MatchCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchCarouselComponent]
    });
    fixture = TestBed.createComponent(MatchCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
