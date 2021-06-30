import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from 'src/environments/environment';
import { HikingService } from "../hiking.service";




@Component({
  selector: 'tourist-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class HikingAddComponent implements OnInit {
  hikingForm: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient,
    private _router: Router,

    private _hikingService: HikingService
  ) {

  }
  ngOnInit() {

    this.hikingForm = this._formBuilder.group({
      title: new FormControl(null),
      location: new FormControl(null),
      info: new FormControl(null),
      image: new FormControl(null)
    })
  }

  //call function "createNewHiking", if button pushed
  onSubmit() {
    alert(this.hikingForm.value.title + this.hikingForm.value.info + this.hikingForm.value.location + this.hikingForm.value.image);
    this.createNewHiking();
  }

  //cancel form, if button "zrusit" pushed
  cancelSubmit() {

    this._router.navigate(["/hiking"]);

  }


  //send data to backend
  createNewHiking() {

    this._http.post(environment.backend + '/hiking/add', {
      title: this.hikingForm.value.title,
      info: this.hikingForm.value.info,
      location: this.hikingForm.value.location,
      image: this.hikingForm.value.image
    })
      .subscribe((respondFromBackend: any) => {
        alert("pridane do db")
        this.cancelSubmit();

      })
  }
}
