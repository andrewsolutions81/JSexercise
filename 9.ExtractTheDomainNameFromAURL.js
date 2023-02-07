/* Extract the domain name from a URL
https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

// let url = "http://github.com/carbonfive/raygun"
let url = "http://www.zombie-bites.com"

function domainName(url){
  //replace http, https and www. for an empty space
  //split it by a . and then  show the first position [0]
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
}
console.log(domainName(url))
