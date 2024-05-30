/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running npx jest ./tests/countVowels.test.js
*/

function countVowels(str) {
    const chars = str.toLowerCase().split("");

    let res = 0;

    chars.forEach((c) => {
      if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u') {
        res++;
      }
    });

    return res;
}

module.exports = countVowels;