import { IPsuedoRandomNumberGenerator } from '../interfaces/psuedo.random.number.generator.interface';

export class MathDotRandomService implements IPsuedoRandomNumberGenerator {
  public next () : number {
    return Math.random();
  }

  public nextInt ( limit:number ) : number {
    return Math.floor(Math.random() * limit);
  }
}
