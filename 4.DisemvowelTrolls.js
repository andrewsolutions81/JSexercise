/* Disemvowel Trolls
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
 */

const str = "This website is for losers LOL!"

function disemvowel(str) {
  return str.replace(/[aeiouAEIIOU]/g, '')
}
console.log(disemvowel(str))


/* function disemvowel(str) {
  //use replace method with a regular expression with lower aeiou uper AEIOU and
  // g global for all the vowels not just the first one with an empty string
  return str.replace(/[aeiouAEIIOU]/g, '')
}
console.log(disemvowel(str)) */
