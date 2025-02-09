import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  platformId = inject(PLATFORM_ID);
  constructor() {
  }
  
  isLoggedIn () {
    if (isPlatformBrowser (this.platformId)) {
      return !!localStorage.getItem ('token') // más cool que lo de abajo 
      // if (localStorage.getItem ('token')) {
      //   return true;
      // }  
      // return false;
    } else {
      return false;
    }
  }

  login () {
    localStorage.setItem ('token', '123')
  }

  logout () {
    localStorage.clear ();
  }
}
