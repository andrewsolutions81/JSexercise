/* Make an algorithm that receives in console a text with values (separeted by ",")
and prints true if the value goes up and down strictly, otherwise it prints false */

// const input = "1,9,1" // true
// const input = "3,4,1" // true
// const input = "1,2,3,4,5,4,3,2,1" // true
// const input = "1,2,3" // false
// const input = "3,2,1" // false
// const input = "5,5,5,5,5,4,3,2,1" // true
const input = "1,1,1" //false
// const input = "1,2,3,4,3,2,1" // true

function santa(input) {
  const values = input.split(',').map(Number); // convert input string to an array of numbers
  const n = values.length;
  // a parabola needs at least 3 points
  if (n < 3) {
    return false;
  }

// check if the points form a parabola
// we iterate over the array and check if each point satisfies the parabolic equation
// y = ax^2 + bx + c, where a = 1/2, b = -1, and c is arbitrary.
// This is equivalent to checking if 2*y[i] = y[i-1] + y[i+1]
// for all i between 1 and n-2 (inclusive).
// If all points satisfy the parabolic equation,
// we return true. Otherwise, we return false.
  for (let i = 1; i < n - 1; i++) {
    if (values[i] * 2 !== values[i - 1] + values[i + 1]) {
      return false;
    }
  }

  return true;
}
console.log(santa(input))


/* function santa(input) {
  const values = input.split(',').map(Number);
  const n = values.length;

  if (n < 3) {
    return false;
  }

  for (let i = 1; i < n - 1; i++) {
    if (values[i] * 2 !== values[i - 1] + values[i + 1]) {
      return false;
    }
  }

  return true;
}
 */
