import { Component, signal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { StateService } from '../state.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = signal ('')
  
  constructor (private statServ: StateService) {

  }

  ngOnInit () {
    this.title.set (this.statServ.title ());
  }

  triggerToggleMenu () {
    this.statServ.onToggleMenu ();
  }
}
