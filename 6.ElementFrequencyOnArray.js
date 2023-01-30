/* Element Frequency on Array

Make a function that receives an array of elements,
returns a object with  elements asa keys and frequency as values. */

let arr = ["a", "a", "b", 1, 1, 2, true, true, false];

const arrayFreq = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }
  return obj;
};

console.log(arrayFreq(arr));
