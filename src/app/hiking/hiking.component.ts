import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from '../../environments/environment';
import { HikingService } from './hiking.service';






@Component({
  selector: 'tourist-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.scss'],

})

export class HikingComponent implements OnInit {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _hikingService: HikingService
  ) { }

  hiking = [];
  addNewHiking = false;
  hikingForm: FormGroup;
  isLogedIn;

  locationFilter = [];
  filteredHiking = [];
  private _authStatusSub: Subscription;


  ngOnInit() {
    this._authStatusSub = this._hikingService.getAuthStatus().subscribe(value => { this.isLogedIn = value});

    this.hikingForm = this._formBuilder.group({
      title: new FormControl(null),
      location: new FormControl(null),
      info: new FormControl(null),
      image: new FormControl(null)
    })

    // request data from backend
    this._http.get(environment.backend + '/hiking/list')
      .subscribe((response: any) => {
        this.filteredHiking = response.data;
        this.hiking = response.data;

      })

    // request data from backend
    this._http.get(environment.backend + '/hiking/location')
      .subscribe((response: any) => {
        this.locationFilter = response.data;

      })

       
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
        this.filteredHiking.push(respondFromBackend.hikingItem)
        this.addNewHiking = false;

      })
  }
  //delete data on the backend according to "id"
  onDelete(id) {

    this._http.delete(environment.backend + '/hiking/delete/' + id)
      .subscribe((res: any) => {
        alert(res.message);
        //this.filteredHiking.filter(hiking => hiking._id === res.id).forEach(deleted => )
        let indexOfDeleted = this.filteredHiking.findIndex(hiking => hiking._id === res.id);
        this.filteredHiking.splice(indexOfDeleted, 1); //remove according id
        this.addNewHiking = false;

      })
  }

  //call function "createNewHiking", if button pushed
  onSubmit() {
    alert(this.hikingForm.value.title + this.hikingForm.value.info + this.hikingForm.value.location + this.hikingForm.value.image);
    this.createNewHiking();
  }

  //cancel form, if button "zrusit" pushed
  cancelSubmit() {

    this.addNewHiking = false;
  }


  //edit data on the backend according to "id"
  onEdit(id) {

    this._http.put(environment.backend + '/hiking/edit/' + id, {})
      .subscribe((res: any) => {
        alert(res.message);
        /*       location.reload();  //refresh page*/
      })
  }

  //show form, if button "add attraction" pushed 
  onShowAddTheForm() {
    this.addNewHiking = true;

  }

  locationFilterChange(event) {
    let filter = event.target.value;
    this.filteredHiking = this.hiking.filter(item => item.location === filter);
    if (filter === "Všetko") {
      this.filteredHiking = this.hiking
    }

  }

  //navigate for individual attraction
  onOpenAttraction(id) {
    this._router.navigate(["/hiking/", id]);
  }

}

