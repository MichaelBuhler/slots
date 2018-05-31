import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReelBackgroundPositionStyle } from '../../models/reel.background.position.style';

@Component({
  selector: 'slots-reel',
  templateUrl: './reel.component.html',
  styleUrls: ['./reel.component.css']
})
export class ReelComponent implements OnInit {

  @Input()
  private positionCount:number;

  @Input()
  private reelPositionObservable:Observable<number>;

  private state:ReelState = ReelState.STOPPED;
  private style:ReelBackgroundPositionStyle;

  public constructor () {
  }

  public ngOnInit () : void {
    this.reelPositionObservable.subscribe((position:number) => {
      this.style = {
        'background-position-y': (140 * position / this.positionCount - 10) + '%'
      };
    });
  }

}

enum ReelState {
  STOPPED,
  STARTING,
  SPINNING,
  STOPPING
}
