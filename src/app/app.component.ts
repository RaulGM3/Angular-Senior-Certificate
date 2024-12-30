import { Component, computed, inject, linkedSignal, signal, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule, MatListModule, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularSenior';
  opened = linkedSignal (inject(StateService).toggleMenu);
  isMobile = linkedSignal (inject (StateService).isMobile);

  constructor (private statServ: StateService, @Inject(PLATFORM_ID) private platformId: Object) {}

  closeOpened (title: string) {
    this.statServ.onUpdateTitle (title);
    this.statServ.onToggleMenu ();
  }

  ngAfterContentInit(): void {
    console.log ('AppComponent ngAfterContentInit');
    if (typeof window !== "undefined")
      this.statServ.setMobile(window.innerWidth < 750);
  }
}
