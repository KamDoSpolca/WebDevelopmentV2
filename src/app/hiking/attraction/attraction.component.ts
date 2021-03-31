import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";




@Component({
  selector: 'tourist-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})

export class AttractionComponent implements OnInit{
    constructor(
    private _http: HttpClient,
     ) { }
  ngOnInit() {
    this._http.get('http://localhost:3000/hiking/list')
      .subscribe((response: any) => {
        alert(response)  

      })
  }
}
