interface Reps {
  [prop: string]: number;
}

class Solution {
  public solution(array: number[]): number {
    /* 
      This solution consists of the same initialization as the array solution:
      create an object with key value pairs. The difference here is that we don't need
      to get the repetitions, so if a key already exists, we don't do nothing.
    */
    let reps = array.reduce((acc: any, num: number): Reps => {
      const keyExists: boolean = acc[num] !== undefined;
      if (!keyExists) {
        acc[num] = 1;
      }
      return acc;
    }, {});

    //After getting the object, we split it into an array
    const arrayOfKeys: string[] = Object.keys(reps);

    //Just returns the number of keys within the array
    return result.length;
  }
}
