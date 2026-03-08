import { Component, effect, signal } from '@angular/core';
import { CARROUSSEL_SLIDES } from '../models/carroussel.model';

@Component({
  selector: 'app-carrossel',
  imports: [],
  templateUrl: './carrossel.html',
  styleUrl: './carrossel.scss',
})
export class Carrossel {
  slides = signal(CARROUSSEL_SLIDES)
  
  currentIndex = signal(0);

  constructor() {
    // Efeito para o Auto Slider
    effect((onCleanup) => {
      const interval = setInterval(() => {
        this.next();
      }, 5000); // 3 segundos

      // Limpa o timer se o componente sumir ou o efeito rodar de novo
      onCleanup(() => clearInterval(interval));
    });
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.slides().length);
  }

  prev() {
    this.currentIndex.update(i => (i - 1 + this.slides().length) % this.slides().length);
  }
}
