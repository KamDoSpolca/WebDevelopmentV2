import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ providedIn: "root" })
export class HikingService {
  private _authStatus = new Subject<boolean>()


  logIn() {
  this._authStatus.next(true)
  }
  logOut() {
    this._authStatus.next(false)

  }
  getAuthStatus() {
    return this._authStatus.asObservable()
    
 



  }
}

