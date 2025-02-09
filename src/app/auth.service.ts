import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = signal (false)

  constructor() {
  }
  
  isLoggedIn () {
    if (localStorage.getItem ('token')) {
      this.loggedIn.set (true);
      return true;
    }  
    return false;
  }
}
