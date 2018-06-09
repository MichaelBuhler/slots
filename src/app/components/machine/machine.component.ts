import { Component } from '@angular/core';
import { SpinResultSubject } from '../../models/spin.result';
import { SimpleWinTableService } from '../../services/simple.win.table.service';
import { MathDotRandomService } from '../../services/math.dot.random.service';
import { IWinTableRowProvider } from '../../interfaces/payoff.provider.interface';
import { IWinTableRow } from '../../models/win.table.row';
import { Utils } from '../../utils';

@Component({
  selector: 'slots-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent {

  private winTableRowProvider:IWinTableRowProvider;

  private reelCount:number = 3;
  private positionCount:number = 7;
  private spinResultSubject:SpinResultSubject = new SpinResultSubject();

  private bank:number = 100;

  public constructor () {
    this.winTableRowProvider = new SimpleWinTableService(new MathDotRandomService());
  }

  private spin (bet:number) : void {
    const winTableRow:IWinTableRow = this.winTableRowProvider.getWinTableRow();

    let permutation:number[] = [];
    if ( winTableRow.combinations ) {
      permutation = Utils.shuffleArray(winTableRow.combinations[Math.floor(Math.random() * winTableRow.combinations.length)]);
    } else {
      for ( let i:number = 0 ; i < this.reelCount ; i++ ) {
        permutation.push(Math.floor(Math.random() * this.positionCount));
      }
      // TODO: need to verify this combination is not one of the other valid combinations
    }
    this.spinResultSubject.next(permutation);

    this.bank += winTableRow.payoff * bet - bet;
  }
}
