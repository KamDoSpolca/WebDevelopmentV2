import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HikingService } from '../hiking/hiking.service';
@Injectable()   //import services point
export class AuthGuard implements CanActivate {
  constructor(
    private _hikingService: HikingService,
    private _router: Router

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let isLoggedIn = this._hikingService.getIsLogIn()
    if (isLoggedIn) {
      return true

    } else {
      this._router.navigate(["/login"])

    }
  }
}
