import { Component, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { SobreModal } from '../sobre-modal/sobre-modal';
import { MVV } from '../models/about.model';

@Component({
  selector: 'app-sobre',
  imports: [MatIcon],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  dialog = inject(MatDialog)

  mvv = MVV;

  openDialog(){
    this.dialog.open(SobreModal);
  }
}
