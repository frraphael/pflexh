import { Component, inject } from '@angular/core';
import { ITimeInfo } from '../models/time.models';
import { MatDialog } from '@angular/material/dialog';
import { TimeModals } from '../time-modals/time-modals';

const TIME_PFLEXH: ITimeInfo[] = [
  {
    id: 'noemi',
    image: '/team/noemi.png',
    name: 'Noemi Carvalho',
    role: 'Arquiteta',
    modalText: {
      full_name: 'Noemi Carvalho',
      education: 'Arquitetura e Urbanismos - Universidade Paulista Unip',
      education_year: 2021,
      post_education:
        'Gerenciamento de obras de construção civil - Universidade Anhanguera - Campos de Marte',
      post_education_year: 2025,
    },
  },
  {
    id: 'nathalia',
    image: '/team/nathalia.png',
    name: 'Nathália Ribeiro',
    role: 'Arquiteta',
    modalText: {
      full_name: 'Nathália Ribeiro',
      education: 'Arquitetura e Urbanismos - Universidade Paulista Unip',
      education_year: 2017,
      post_education: 'Legalização de obras e aprovação de projetos - Universidade Nove de Julho',
      post_education_year: 2025,
    },
  },
  {
    id: 'victoria',
    image: '/team/victoria.png',
    name: 'Victoria Freitas',
    role: 'Social Media',
  },
  {
    id: 'raphael',
    image: '/team/raphael.png',
    name: 'Rapahel Ribeiro',
    role: 'IT Assistence',
  },
];

@Component({
  selector: 'app-time-cards',
  imports: [],
  templateUrl: './time-cards.html',
  styleUrl: './time-cards.scss',
})
export class TimeCards {
  cards = TIME_PFLEXH;

  dialog = inject(MatDialog);

  openDialog(modalText: any) {
    if (modalText) {
      this.dialog.open(TimeModals, {
        data: {
          modalText,
        },
      });
    }
  }
}
