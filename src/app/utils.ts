export class Utils {
  public static shuffleArray(array:any[]) : any[] {
    const newArray:any = array.slice();
    for (let i:number = newArray.length - 1 ; i > 0 ; i-- ) {
      const j:number = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
}
