export interface IPsuedoRandomNumberGenerator {
  next() : number;
  nextInt(limit:number) : number;
}
