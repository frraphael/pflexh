import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PROJECTS, SERVICES } from '../models/projetos.models';
import { MatDialog } from '@angular/material/dialog';
import { ProjetosModals } from '../projetos-modals/projetos-modals';

@Component({
  selector: 'app-nosso-trabalho',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './nosso-trabalho.html',
  styleUrl: './nosso-trabalho.scss',
})
export class NossoTrabalho {
  projects = PROJECTS;
  services = SERVICES;

  dialog = inject(MatDialog);

  openDialog(modalText: any) {
    this.dialog.open(ProjetosModals, {
      data: {
        modalText,
      },
    });
  }
}
