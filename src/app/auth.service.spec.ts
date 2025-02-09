import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { provideRouter } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService | null;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach (() => {
    service = null;
    localStorage.removeItem ('token');
  })

  it('Should return true if localStorage has a value', () => {
    localStorage.setItem ('token', '123');
    expect(service?.isLoggedIn ()).toBeTruthy();
  });

  it ('Should return false if the localstorage has no value', () => {
    expect (service?.isLoggedIn ()).toBeFalsy()
  })
});
