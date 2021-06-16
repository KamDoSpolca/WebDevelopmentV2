import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class HikingService {
  private _authStatus = new Subject<boolean>()
  private _isLoggedIn = false;

  logIn() {
    this._isLoggedIn = true;
    this._authStatus.next(true)
  }
  logOut() {
    alert("odhlasenie");
    this._isLoggedIn = false;
    this._authStatus.next(false)

  }
  getAuthStatus() {
    return this._authStatus.asObservable()





  }

  getIsLogIn() {
    return this._isLoggedIn;

  }
}

