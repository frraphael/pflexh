import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossoTrabalho } from './nosso-trabalho';

describe('NossoTrabalho', () => {
  let component: NossoTrabalho;
  let fixture: ComponentFixture<NossoTrabalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossoTrabalho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossoTrabalho);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
