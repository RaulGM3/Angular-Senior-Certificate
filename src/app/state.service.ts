import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  title = signal ('Angular Senior');
  toggleMenu = signal (false);
  isMobile = signal (false);

  constructor() {
    console.log ('StateService constructor')
  }

  onToggleMenu () {
    this.toggleMenu.update (val => val = !val);
  }

  onUpdateTitle (title: string) {
    this.title.set (title);
  }

  setMobile (val: boolean) {
    this.isMobile.set (val);
  }
}
