/* Exes and Ohs
https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false */

let str = "zzoo";

function XO(str) {
  arr = [...str.toLowerCase()];
  let numberOfX = 0;
  let numberOfO = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "o") {
      numberOfO += 1;
    }
    if (arr[i] === "x") {
      numberOfX += 1;
    }
  }

  console.log("x: ", numberOfX, "o :", numberOfO);
  if (numberOfO === numberOfX) {
    return true;
  } else {
    return false;
  }
}

console.log(XO(str));


/* function XO(str) {
  // make it an array of the letters in lower case
  arr = [...str.toLowerCase()];
  // make counter for x an o
  let numberOfX = 0;
  let numberOfO = 0;

  // for loop for adding to the counter
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "o") {
      numberOfO += 1;
    }
    if (arr[i] === "x") {
      numberOfX += 1;
    }
  }

  // if statement for true if both numbers are the same
  if (numberOfO === numberOfX) {
    return true;
  } else {
    return false;
  }
} */

