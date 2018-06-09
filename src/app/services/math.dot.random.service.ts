import { IPsuedoRandomNumberGenerator } from './psuedo.random.number.generator.interface';

export class MathDotRandomService implements IPsuedoRandomNumberGenerator {
  public next() : number {
    return Math.random();
  }
}
