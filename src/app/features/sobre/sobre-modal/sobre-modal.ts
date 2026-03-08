import { Component } from '@angular/core';
import { MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MORE_ABOUT } from '../models/about.model';

@Component({
  selector: 'app-sobre-modal',
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './sobre-modal.html',
  styleUrl: './sobre-modal.scss',
})
export class SobreModal {
  sobre = MORE_ABOUT;
}
