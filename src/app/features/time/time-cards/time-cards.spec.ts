import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCards } from './time-cards';

describe('TimeCards', () => {
  let component: TimeCards;
  let fixture: ComponentFixture<TimeCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
