import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn = false;
  private _user: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  get user(): any {
    return this._user.getValue();
  }

  set user(user) {
    this._user.next(user);
  }
  constructor() { }

  setLoggedInStatus(isLoggedIn: boolean): void {
    this.loggedIn = isLoggedIn;
  }

}
