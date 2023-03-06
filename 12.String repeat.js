/* String repeat
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello
 */

let n = 3
let s = "*"

function repeatStr (n, s) {
  if(typeof(n) !== "number" || typeof(s) !== "string"){
    console.log("n must be a number and s must be text")
  }
  let length = [...s]
  let solution = []
  for (let i = 0; i < n; i++) {
    solution.push(s)
  }

  return solution.join("")
}
console.log(repeatStr(3, "*"))


// better solution

// function repeatStr (n, s) {
//   return s.repeat(n);
// }
