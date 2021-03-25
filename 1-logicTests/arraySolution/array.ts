interface Reps {
  [prop: string]: number;
}

class Solution {
  public solution(array: number[]): number {
    /* The (key, value) pattern in objects allows creation and increment of 
      values; this is possible because of the object[key] getter and setter 
      property. If a key exists then it only increments, else the key is created */
    let reps = array.reduce((acc: any, num: number): Reps => {
      const keyExists: boolean = acc[num] !== undefined;
      keyExists ? ++acc[num] : (acc[num] = 1);
      return acc;
    }, {});

    /* Since only one number has one repetition, then is just find that number in
     a list of keys */
    const result: number = Object.keys(reps).find(key => reps[key] === 1);
    return result;
  }
}
