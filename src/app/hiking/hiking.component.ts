import { Component } from "@angular/core";




@Component({
  selector: 'tourist-hiking',
  templateUrl: './hiking.component.html',
  styleUrls: ['./hiking.component.scss']
})

export class HikingComponent {
  hiking = [{ title: "Slavkovský štít ", info: "Velmi zaujimava tura" }];

}
