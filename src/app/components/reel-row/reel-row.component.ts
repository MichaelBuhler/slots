import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinResultObservable } from '../../models/spin.result';

@Component({
  selector: 'slots-reel-row',
  templateUrl: './reel-row.component.html',
  styleUrls: ['./reel-row.component.css']
})
export class ReelRowComponent implements OnInit {

  @Input()
  private reelCount:number;

  @Input()
  private positionCount:number;

  @Input()
  private spinResultObservable:SpinResultObservable;

  private reelPositionSubjects:Subject<number>[] = [];

  public constructor () {
  }

  public ngOnInit () : void {
    for ( let i:number = 0 ; i < this.reelCount ; i ++ ) {
      this.reelPositionSubjects.push(new Subject<number>());
    }

    this.spinResultObservable.subscribe((spinResult:number[]) => {
      spinResult.forEach((position:number, index:number) => {
        this.reelPositionSubjects[index].next(position);
      });
    });
  }
}
