/* Element Frequency on Array

Make a function that receives an array of elements,
returns a object with  elements asa keys and frequency as values. */

let arr = ["a", "a", "b", 1, 1, 2, true, true, false];//{ '1': 2, '2': 1, a: 2, b: 1, true: 2, false: 1 }

const arrayFreq = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (obj[element]) {
      obj[element]++;
    } else {
      obj[element] = 1;
    }
  }
  return obj;
};

console.log(arrayFreq(arr));
