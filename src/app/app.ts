import { Component, signal } from '@angular/core';
import { Header } from './layouts/header/header';
import { Carrossel } from './features/carrossel/carrossel/carrossel';
import { NossoTrabalho } from './features/projetos/nosso-trabalho/nosso-trabalho';
import { Parceiros } from './features/parceiros/parceiros/parceiros';
import { Sobre } from './features/sobre/sobre/sobre';
import { Time } from './features/time/time/time';
import { Contato } from './features/contato/contato/contato';
import { Footer } from './layouts/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Carrossel, NossoTrabalho, Parceiros, Sobre, Time, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('pflexh');
}
