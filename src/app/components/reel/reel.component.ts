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
  private positionObservable:Observable<number>;

  private state:ReelState = ReelState.STOPPED;
  private style:ReelBackgroundPositionStyle;

  public constructor () {
  }

  public ngOnInit () : void {
    this.positionObservable.subscribe(( position:number ) => {
      this.style = {
        'background-position-y': position + '%'
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
