import { Component } from '@angular/core';

@Component({
  selector: 'slots-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {

  private reelCount:number = 3;

  public constructor () {}
}