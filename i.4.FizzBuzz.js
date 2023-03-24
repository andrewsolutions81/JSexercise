fizzBuzz;
/* given a number n for each integer i in the range from 1 to n inclusive, log one value as follows
if i is a multiple of both 3 and 5, print FizzBuzz
if i is a multiple of 3 but not 5 print Fizz
if i is a multiple of 5 but no 3 print Buzz
if i is not a multiple of 3 or 5 print value of i */

const n = 100;

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(n));

/*
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case (i % 3 === 0 && i % 5 === 0):
        console.log("FizzBuzz");
        break;
      case (i % 3 === 0):
        console.log("Fizz");
        break;
      case (i % 5 === 0):
        console.log("Buzz");
        break;
      default:
        console.log(i);
        break;
    }
  }
}
 */
