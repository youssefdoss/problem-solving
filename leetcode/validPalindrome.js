/**
 * Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-z]/gi, '');

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) return false;
  }

  return true;
};