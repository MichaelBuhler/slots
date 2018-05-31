import { Component } from '@angular/core';
import { ReelService } from '../../services/reel.service';

@Component({
  selector: 'slots-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent {

  private offset = 0;
  private style:ReelBackgroundPositionStyle;

  constructor ( private reelService:ReelService ) {
    setInterval(() => {
      this.offset += 10;
      this.style = {
        'background-position-y': this.offset + 'px'
      };
    }, 100);
  }

}

interface ReelBackgroundPositionStyle {
  'background-position-y':string;
}
