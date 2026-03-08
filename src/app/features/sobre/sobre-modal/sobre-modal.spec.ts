import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreModal } from './sobre-modal';

describe('SobreModal', () => {
  let component: SobreModal;
  let fixture: ComponentFixture<SobreModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
