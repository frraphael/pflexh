import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-time-modals',
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './time-modals.html',
  styleUrl: './time-modals.scss',
})
export class TimeModals{
  data = inject(MAT_DIALOG_DATA);
}
