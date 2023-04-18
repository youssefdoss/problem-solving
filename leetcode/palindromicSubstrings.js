/**
 * Palindromic Substrings
 *
 * Given a string s, return the number of palindromic substrings in it.
 *
 * A string is a palindrome when it reads the same backward as forward.
 *
 * A substring is a contiguous sequence of characters within the string.
 *
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  const n = s.length;
  let count = n;

  for (let i = 0; i < n; i++) {
      if (i > 0 && s[i] === s[i - 1]) {
          count++;
          let left = i - 2;
          let right = i + 1;

          while (left >= 0 && right < n && s[left] === s[right]) {
              count++;
              left--;
              right++;
          }
      }

      let left = i - 1;
      let right = i + 1;

      while (left >= 0 && right < n && s[left] === s[right]) {
          count++;
          left--;
          right++;
      }
  }

  return count;
};