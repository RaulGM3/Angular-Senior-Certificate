import { Component, inject, linkedSignal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StateService } from '../state.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  isMobile = linkedSignal (inject (StateService).isMobile);
  title = linkedSignal (inject(StateService).title);
  
  constructor (private authServ: AuthService, private statServ: StateService) {
  }
  
  ngOnInit () {
    // this.title.set (this.statServ.title ());
  }

  triggerToggleMenu () {
    this.statServ.onToggleMenu ();
  }

  needsLogin () {
    return !this.authServ.isLoggedIn ();

  }

  login () {
    this.authServ.login ();
  }

  logout () {
    this.authServ.logout ();
  }
}
