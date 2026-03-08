import { Component, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import { ContatoForm } from "../contato-form/contato-form";


@Component({
  selector: 'app-contato',
  imports: [FontAwesomeModule, ContatoForm],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {

  constructor() {
    const library = inject(FaIconLibrary);
    library.addIcons(faEnvelope)
  }

}
