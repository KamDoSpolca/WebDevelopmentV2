import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { constants } from 'perf_hooks';
import { environment } from '../../environments/environment';





@Component({
  selector: 'tourist-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.scss']
})

export class HikingComponent implements OnInit {
  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  hiking = [];
  addNewHiking = false;


  locationFilter = [

  ];

  filteredHiking = [];

  ngOnInit() {
    this._http.get(environment.backend + '/hiking/list')
      .subscribe((response: any) => {
        this.filteredHiking = response.data;
        this.hiking = response.data;

      })


    this._http.get(environment.backend + '/hiking/location')
      .subscribe((response: any) => {
        this.locationFilter = response;

      })
  }

  createNewHiking() {

    this._http.post(environment.backend + '/hiking/add', {})
      .subscribe((response: any) => {
        alert("pridane do db")

      })
  }

  onDelete(id) {

    this._http.delete(environment.backend + '/hiking/delete/' + id)
      .subscribe((res: any) => {
        alert(res.message)
      })
  }

  onEdit(id) {

    this._http.put(environment.backend + '/hiking/edit/' + id, {})
      .subscribe((res: any) => {
        alert(res.message)
      })
  }

  onShowAddTheForm() {
    this.addNewHiking = true;
    this.createNewHiking()

  }

  locationFilterChange(event) {
    let filter = event.target.value;
    this.filteredHiking = this.hiking.filter(item => item.location === filter);
    if (filter === "Všetko") {
      this.filteredHiking = this.hiking
    }
  }

  onOpenAttraction(id) {
    this._router.navigate(["/hiking/", id]);
  }

}

