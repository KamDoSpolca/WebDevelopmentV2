import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
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

  onOpenAttraction(id) {
    this._router.navigate(["/hiking/", id]);
  }

}

