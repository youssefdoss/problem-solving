/**
 * Palindrome Number
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let xString = x.toString();
  let length = xString.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
      if (xString[i] !== xString[length - 1 - i]) return false;
  }

  return true;
};