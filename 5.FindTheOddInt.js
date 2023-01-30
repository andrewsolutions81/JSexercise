/* Find the odd int
https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

let A = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

function findOdd(A) {
  // brute force option  compare
  //each number with each other ,
  // if they are the same add one to the counter,
  // and if the counter reminder is different from 0 (is odd) return the number
  let counter = 0;
  for (let i = 0; i < A.length; i++) {
    const a = A[i];
    for (let j = 0; j < A.length; j++) {
      const b = A[j];
      if (a === b) {
        counter++;
      }
    }
    if (counter % 2 != 0) {
      return a;
    }
  }
}

console.log(findOdd(A))
