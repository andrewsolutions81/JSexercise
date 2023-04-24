/*Lonely Integer
https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

The unique element is .

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .

Constraints

It is guaranteed that  is an odd number and that there is one unique element.
, where */
const a = [1,2,3,4,3,2,1]

function lonelyinteger(a) {
  let freq = {}

  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if(freq[element]){
      freq[element]++
    } else {
      freq[element] = 1
    }
  }
    // Find the element with the lowest frequency by initializing a variable with a large value
    let lowestFrequency = Infinity;
    let lowestElement = null;
   // Loop over each element in the frequency object
   for (let element in freq) {
    // If the frequency of the current element is lower than the lowest frequency so far,
    // update the lowest frequency and lowest element
    if (freq[element] < lowestFrequency) {
      lowestFrequency = freq[element];
      lowestElement = element;
    }
  }

  // Return the element with the lowest frequency
  return lowestElement;
}
console.log(lonelyinteger(a))

