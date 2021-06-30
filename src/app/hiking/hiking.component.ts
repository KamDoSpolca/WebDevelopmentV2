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

    private _hikingService: HikingService
  ) { }

  hiking = [];
  addNewHiking = false;

  isLogedIn;

  locationFilter = [];
  filteredHiking = [];
  private _authStatusSub: Subscription;


  ngOnInit() {

    this.isLogedIn = this._hikingService.getIsLogIn();
    this._authStatusSub = this._hikingService.getAuthStatus()
      .subscribe(value => {
        this.isLogedIn = value
      });



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
    this._router.navigate(["/hiking/add"])

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

