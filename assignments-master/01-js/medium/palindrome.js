/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const len = str.length;

  if(len === 1) {
    return true;
  }

  for(let i = 0; i < len; i++) {
    if(str[i] !== str[len - i - 1]) {
      return false;
    }
  }

  return true;
}

isPalindrome('aba')

module.exports = isPalindrome;
