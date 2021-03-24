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

  hiking = [
    { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg", location: "Vysoké Tatry", point: "Starý Smokovec", info2: "Celodenna tura s moznostou spojit prijemne s uzitocnym" },
    { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg", location: "Slovenský Raj", point: "Štrbské pleso" },
    { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg", location: "Nízke Tatry", point: "Veľká Lesná" }

  ];


  locationFilter = [
    "Všetko", "Vysoké Tatry", "Slovenský Raj", "Nízke Tatry"
  ];

  filteredHiking = [];

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.filteredHiking = this.hiking
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

