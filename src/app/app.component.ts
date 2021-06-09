import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebDevelopmentV2';
  @Output() event = new EventEmitter<boolean>();
  isLogedIn = false;



  logInOut() {
    this.isLogedIn = !this.isLogedIn; // ! opacna hodnota
    this.event.emit(this.isLogedIn);
  }
}
