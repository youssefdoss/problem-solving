/**
 * Longest Palindrome
 *
 * Given a string s which consists of lowercase or uppercase letters, return the
 * length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome
 * here.
 *
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let charCount = {};
  let maxLength = 0;

  for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char in charCount) {
      if (charCount[char] > 1) {
          const currCount = Math.floor(charCount[char] / 2) * 2;
          maxLength += currCount;
          charCount[char] -= currCount;
      }
  }

  const remainder = Object.values(charCount);

  if (remainder.includes(1)) {
      maxLength++;
  }

  return maxLength;
};