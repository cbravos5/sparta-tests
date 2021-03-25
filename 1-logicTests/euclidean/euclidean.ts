class Solution {
  public solution(n: number, m: number): number {
    /*
    creates an array with n elements, that represents the number of chocolates.
    The array constains only booleans values, if true, then the position
    has only the wrapper, otherwise it contains chocolate.
    */
    let chocolatesArray: boolean[] = new Array(n).fill(false);
    let actualChocolate: number = 0;
    let eatenChocolates = 0;
    /* 
    The process is simple: we iterate through the array verifying whether chocolate
    is empty or not. If not, we increment a variable and get the next chocolate index,
    otherwise we break the loop.
    Using infinite loops require a fair amount of attention. Here, in the "worst case",
    all chocolates will be eaten and as they are marked after that, the next index
    will get a true value and the loop will be broken.
    */
    while (true) {
      if (chocolatesArray[actualChocolate]) {
        break;
      }
      chocolatesArray[actualChocolate] = true;
      eatenChocolates++;
      actualChocolate = this.getNextChocolate(actualChocolate, n, m);
    }

    return eatenChocolates;
  }

  //Calculates the next chocolate index
  private getNextChocolate = (actual: number, n: number, m: number): number =>
    (actual + m) % n;
}
