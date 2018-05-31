import { Component } from '@angular/core';

@Component({
  selector: 'slots-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent {

  offset = 0;
  style: BackgroundPositionStyle;

  constructor() {
    setInterval(() => {
      this.offset += 100;
      this.style = {
        'background-position-y': this.offset + 'px'
      };
    }, 1000);
  }

}

interface BackgroundPositionStyle {
  'background-position-y': string;
}
