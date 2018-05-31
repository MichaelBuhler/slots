import { Component } from '@angular/core';
import { SpinResultSubject } from '../../models/spin.result';

@Component({
  selector: 'slots-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {

  private reelCount:number = 3;
  private positionCount:number = 7;
  private spinResultSubject:SpinResultSubject = new SpinResultSubject();

  public constructor () {}

  private spin () : void {
    const positions:number[] = [];
    for ( let i:number = 0 ; i < this.reelCount ; i++ ) {
      positions.push(Math.floor(Math.random() * this.positionCount));
    }
    this.spinResultSubject.next(positions);
  }
}
