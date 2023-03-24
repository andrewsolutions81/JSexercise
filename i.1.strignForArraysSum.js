/* create an algorithm that receives from the console
two lists of numbers separated by commas, each listsbeing separated by a slash

create two lists from the received text and prints a new list by
adding all values from the two previows lists.
 */
let numbers = "1,2,3/3,2,1"; // [4,4,4]

function addList(num) {
  let noSlash = num.split("/");
  let arr1 = noSlash[0].split(",");
  let arr2 = noSlash[1].split(",");
  let solution = []

  for (let i = 0; i < arr1.length; i++) {
      solution.push(+arr1[i] + +arr2[i])
  }
  return solution;
}
console.log(addList(numbers));


/* true answere */

// const interface = { input: process.stdin, output: process.stdout };
// const readline = require("readline").createInterface(interface)[Symbol.asyncIterator]();

// (async()=> {
//     let line1 =(await readline.next()).value

//     let noSlash = line1.split("/");
//     let arr1 = noSlash[0].split(",");
//     let arr2 = noSlash[1].split(",");
//     let solution = []

//     for (let i = 0; i < arr1.length; i++) {
//       solution.push(+arr1[i] + +arr2[i])
//     }
//     console.log(`[${arr1}] + [${arr2}] => [${solution}]`)

// })()
