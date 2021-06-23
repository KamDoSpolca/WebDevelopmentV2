import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { environment } from "../../environments/environment.prod";

@Injectable({ providedIn: "root" })
export class HikingService {
  private _authStatus = new Subject<boolean>()
  private _isLoggedIn = false;


  constructor(
    private _httpClient: HttpClient,
    private _router: Router

  ) { }


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

  validateUser(email, password) {
    this._httpClient.post(environment.backend + '/login', { email, password })
      .subscribe((response: any) => {
        //alert(response)  

        if (response.res) {
          this.logIn();
          this._router.navigate(["/hiking"]);
          alert("prihlaseny")
        }
        else {
          this.logOut();
        }
      })
  }
}

