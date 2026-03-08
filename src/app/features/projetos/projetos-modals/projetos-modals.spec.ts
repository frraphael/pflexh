import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosModals } from './projetos-modals';

describe('ProjetosModals', () => {
  let component: ProjetosModals;
  let fixture: ComponentFixture<ProjetosModals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosModals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosModals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
