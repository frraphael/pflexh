import { Component, Renderer2, inject, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { map, shareReplay } from 'rxjs/operators';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  breakpointObserver = inject(BreakpointObserver);
  renderer = inject(Renderer2)
  isMenuOpen = signal(false);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  menuToggle() {
    this.isMenuOpen.update((prev) => !prev);
    if (this.isMenuOpen()){
      this.renderer.addClass(document.body, 'overflow-hidden');
    }else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
}
