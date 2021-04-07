import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";




@Component({
  selector: 'tourist-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})

export class AttractionComponent implements OnInit {
  constructor(
    private _http: HttpClient,
  ) { }
  ngOnInit() {
    this._http.get(environment.backend + '/hiking/list')
      .subscribe((response: any) => {
        //alert(response)  

      })
  }
}
