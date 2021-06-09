import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HikingService {
  private _loggedin = false;
  getLoggedin() {
    return this._loggedin
  }
  setLoggedStatus(value) {
    this._loggedin = value
  }
}
