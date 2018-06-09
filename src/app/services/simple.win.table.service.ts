import { IPayoffProvider } from './payoff.provider.interface';
import { IPsuedoRandomNumberGenerator } from './psuedo.random.number.generator.interface';

export class SimpleWinTableService implements IPayoffProvider {

  private   APPLE:number = 0;
  private  CHERRY:number = 1;
  private DIAMOND:number = 2;
  private   GRAPE:number = 3;
  private   HEART:number = 4;
  private  ORANGE:number = 5;
  private   SEVEN:number = 6;

  private table:PayoffLevel[] = [{
    max: 0.75,
    payoff: 0
  }, {
    max: 0.9,
    payoff: 1,
    combinations: [
      [this.APPLE, this.APPLE, this.CHERRY],  [this.APPLE, this.APPLE, this.GRAPE],    [this.APPLE, this.APPLE, this.ORANGE],
      [this.CHERRY, this.CHERRY, this.APPLE], [this.CHERRY, this.CHERRY, this.GRAPE],  [this.CHERRY, this.CHERRY, this.ORANGE],
      [this.GRAPE, this.GRAPE, this.APPLE],   [this.GRAPE, this.GRAPE, this.CHERRY],   [this.GRAPE, this.GRAPE, this.ORANGE],
      [this.ORANGE, this.ORANGE, this.APPLE], [this.ORANGE, this.ORANGE, this.CHERRY], [this.ORANGE, this.ORANGE, this.GRAPE]
    ]
  }, {
    max: 0.97,
    payoff: 2,
    combinations: [
      [this.APPLE, this.APPLE, this.APPLE],
      [this.CHERRY, this.CHERRY, this.CHERRY],
      [this.GRAPE, this.GRAPE, this.ORANGE],
      [this.ORANGE, this.ORANGE, this.ORANGE],
    ]
  }, {
    max: 0.99897,
    payoff: 21,
    combinations: [[this.HEART, this.HEART, this.HEART]]
  }, {
    max: 0.99997,
    payoff: 46,
    combinations: [[this.SEVEN, this.SEVEN, this.SEVEN]]
  }, {
    max: 1,
    payoff: 161,
    combinations: [[this.DIAMOND, this.DIAMOND, this.DIAMOND]]
  }];

  public constructor ( private prng:IPsuedoRandomNumberGenerator ) {
  }

  public getPayoff () : number {
    const random:number = this.prng.next();
    for ( let i:number = 0; i < this.table.length ; i++ ) {
      if ( random > this.table[i].max ) {
        continue;
      }
      return this.table[i].payoff;
    }
  }

}

interface PayoffLevel {
  max:number;
  payoff:number;
  combinations?:number[][];
}
