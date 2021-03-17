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
  ) {  }

    hiking = [
    { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg" },
    { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg" },
    { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg" }

  ];

  ngOnInit() {
    this._http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
    
      })

  }



}

