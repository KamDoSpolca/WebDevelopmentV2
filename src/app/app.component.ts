import { Component, Output, EventEmitter } from '@angular/core';
import { HikingService } from './hiking/hiking.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebDevelopmentV2';

  constructor(
    private _hikingService: HikingService
  ) { }


}
