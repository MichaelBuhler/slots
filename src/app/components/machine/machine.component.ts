import { Component } from '@angular/core';
import { SpinResultSubject } from '../../models/spin.result';
import { SimpleWinTableService } from '../../services/simple.win.table.service';
import { MathDotRandomService } from '../../services/math.dot.random.service';
import { IPayoffProvider } from '../../interfaces/payoff.provider.interface';

@Component({
  selector: 'slots-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {

  private payoffProvider:IPayoffProvider;

  private reelCount:number = 3;
  private positionCount:number = 7;
  private spinResultSubject:SpinResultSubject = new SpinResultSubject();

  private bank:number = 100;

  public constructor () {
    this.payoffProvider = new SimpleWinTableService(new MathDotRandomService());
  }

  private spin (bet:number) : void {
    this.bank += this.payoffProvider.getPayoff() * bet - bet;
  }
}
