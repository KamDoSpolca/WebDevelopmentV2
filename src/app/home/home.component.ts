import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'tourist-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit {
  firstNumber: number = 5;
  firstString: string = 'janko hrasko';
  fruits: string[] = ['apple', 'pomegranade', 'ananas', 'pear', 'watermelon'];
  items = [];

  constructor(
    private _httpClient: HttpClient
  ) { }



  ngOnInit() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response: any) => {
        this.items = response;
      })

  }


  onAddFruit() {
    this.fruits.push('grape');
  }

  onRemoveFruit() {
    this.fruits.pop();
  }

}
