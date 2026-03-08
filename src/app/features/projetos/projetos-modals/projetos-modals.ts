import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';


@Component({
  selector: 'app-projetos-modals',
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './projetos-modals.html',
  styleUrl: './projetos-modals.scss',
})
export class ProjetosModals {
  data = inject(MAT_DIALOG_DATA);
}
