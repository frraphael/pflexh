import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeModals } from './time-modals';

describe('TimeModals', () => {
  let component: TimeModals;
  let fixture: ComponentFixture<TimeModals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeModals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeModals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
