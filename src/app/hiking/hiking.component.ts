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
    "Všetko", "Vysoké Tatry", "Slovenský Raj", "Nízke Tatry"
  ];

  filteredHiking = [];

  ngOnInit() {
    this._http.get('http://localhost:3000/hiking/list')
      .subscribe((response: any) => {
        this.filteredHiking = response;

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

