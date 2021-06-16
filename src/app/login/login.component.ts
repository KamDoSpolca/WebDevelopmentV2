import { Component, OnInit } from "@angular/core";
import { HikingService } from "../hiking/hiking.service";





@Component({
  selector: 'tourist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})


export class LoginComponent implements OnInit {


  constructor(
    private _hikingService: HikingService
  ) { }

  // @Output() event = new EventEmitter<boolean>();
  isLogedIn;

  ngOnInit() {
    this.isLogedIn = this._hikingService.getIsLogIn();

  }
  logInOut() {
    this.isLogedIn = !this.isLogedIn; // ! opacna hodnota
    // this.event.emit(this.isLogedIn);

    if (this.isLogedIn) {
      this._hikingService.logIn()
    }
    else {
      this._hikingService.logOut()

    }
  }
}
