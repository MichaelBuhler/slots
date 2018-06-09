import { IPayoffProvider } from './payoff.provider.interface';
import { MathDotRandomService } from './math.dot.random.service';
import { IPsuedoRandomNumberGenerator } from './psuedo.random.number.generator.interface';

export class SimpleWinTableService implements IPayoffProvider {

  private prng:IPsuedoRandomNumberGenerator;

  private table:PayoffLevel[] = [{
    max: 0.75,
    payoff: 0
  }, {
    max: 0.9,
    payoff: 1
  }, {
    max: 0.97,
    payoff: 2
  }, {
    max: 0.99897,
    payoff: 21
  }, {
    max: 0.99997,
    payoff: 46
  }, {
    max: 1,
    payoff: 161
  }];

  public constructor (private prng:MathDotRandomService) {
  }

  public getPayoff () : number {
    const random:number = this.prng.next();
    for ( let i:number = this.table.length - 1 ; i >= 0 ; i-- ) {
      if ( this.table[i].max < random ) {
        return this.table[i].payoff;
      }
    }
  }

}

interface PayoffLevel {
  max:number;
  payoff:number;
}
