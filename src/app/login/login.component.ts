import { Component, OnInit } from "@angular/core";
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HikingService } from "../hiking/hiking.service";





@Component({
  selector: 'tourist-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})


export class LoginComponent implements OnInit {


  constructor(
    private _hikingService: HikingService,
    private _formBuilder: FormBuilder
  ) { }

  loginForm: FormGroup;

  // @Output() event = new EventEmitter<boolean>();
  isLogedIn;

  ngOnInit() {
    this.isLogedIn = this._hikingService.getIsLogIn();

    this.loginForm = this._formBuilder.group({
      email: new FormControl(null, { validators: Validators.email }),
      password: new FormControl(null, { validators: [Validators.required, Validators.minLength(4)] })

    })
  }
  logInOut() {
    if (this.loginForm.invalid) {

      alert("nespravne udaje");
      return;
    }

    this._hikingService.validateUser(this.loginForm.value.email, this.loginForm.value.password);


    //this.isLogedIn = !this.isLogedIn; // ! opacna hodnota


  }
}
