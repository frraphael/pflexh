import { Component } from '@angular/core';
import { PARTNERS } from '../models/partners.models';

@Component({
  selector: 'app-parceiros',
  imports: [],
  templateUrl: './parceiros.html',
  styleUrl: './parceiros.scss',
})
export class Parceiros {
  partners = PARTNERS;
}
