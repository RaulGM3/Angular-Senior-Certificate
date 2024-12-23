import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  title = signal ('AngularSenior');
  toggleMenu = signal (false);

  constructor() {
    console.log ('StateService constructor')
  }

  onToggleMenu () {
    console.log ('toggling ')
    this.toggleMenu.update (val => {
      console.log ('val', val)
      return val = !val
    });
  }
}
