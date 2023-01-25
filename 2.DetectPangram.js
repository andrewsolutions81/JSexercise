/* Detect Pangram
https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

A pangram is a sentence that contains every single letter of the alphabet at least
once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a
 pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is,
False if not. Ignore numbers and punctuation.
 */

let string = "The quick brown fox jumps over the lazy dog";

const isPangram = (string) => {
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every((letter) => string.toLowerCase().includes(letter));
}

console.log(isPangram(string));


/* function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')// split for  having an array with each letter ->["a","b"]
    //every function return true  if  all of the conditions works with the criteria
    // each letter ust be in the string
    .every((letter) => string.toLowerCase().includes(letter));
} */
