import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'slots-reel-row',
  templateUrl: './reel-row.component.html',
  styleUrls: ['./reel-row.component.css']
})
export class ReelRowComponent implements OnInit {

  @Input()
  private reelCount:number;

  private reels:any[];

  /*
   * TODO move this stuff
   */
  private iconHeight:number = 256;
  private spritesheetPositions:number = 7;

  public constructor () {
  }

  public ngOnInit () : void {
    const subject:Subject<number> = new Subject<number>();
    const observable:Observable<number> = subject.asObservable();
    this.reels = new Array(this.reelCount).fill({
      subject,
      observable
    });
    let position:number = -1;
    const nextPosition:() => void = () : void => {
      position += 1;
      position %= this.spritesheetPositions * 2;
      this.reels.forEach((reel) => reel.subject.next(140 * position / this.spritesheetPositions - 10));
    };
    nextPosition();
    setInterval(nextPosition, 1000);
  }
}
