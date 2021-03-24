import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";




@Component({
  selector: 'tourist-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.scss']
})

export class HikingComponent implements OnInit {
  constructor(
    private _http: HttpClient
  ) { }

  hiking = [];


  locationFilter = [

  ];

  filteredHiking = [];

  ngOnInit() {
    this._http.get('http://localhost:3000/hiking/list')
      .subscribe((response: any) => {
        this.filteredHiking = response;
        this.hiking = response;

      })


    this._http.get('http://localhost:3000/hiking/location')
      .subscribe((response: any) => {
        this.locationFilter = response;

      })
  }

  locationFilterChange(event) {
    let filter = event.target.value;
    this.filteredHiking = this.hiking.filter(item => item.location === filter);
    if (filter === "Všetko") {
      this.filteredHiking = this.hiking
    }
  }



}

