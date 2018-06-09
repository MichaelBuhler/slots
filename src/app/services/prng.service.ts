import { PRNG } from './prng.interface';

export class MathDotRandomService implements PRNG {
  public next() : number {
    return Math.random();
  }
}
