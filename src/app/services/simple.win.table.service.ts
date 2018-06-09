import { IPayoffProvider } from './payoff.provider.interface';
import { IPsuedoRandomNumberGenerator } from './psuedo.random.number.generator.interface';

export class SimpleWinTableService implements IPayoffProvider {

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

  public constructor ( private prng:IPsuedoRandomNumberGenerator ) {
  }

  public getPayoff () : number {
    const random:number = this.prng.next();
    console.log('random', random);
    for ( let i:number = 0; i < this.table.length ; i++ ) {
      if ( random > this.table[i].max ) {
        continue;
      }
      console.log('payoff', this.table[i].payoff);
      return this.table[i].payoff;
    }
  }

}

interface PayoffLevel {
  max:number;
  payoff:number;
}
