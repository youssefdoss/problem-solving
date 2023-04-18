/**
 * Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length;
  const dp = new Array(n).fill(1);
  let maxLen = 1;
  let start = 0;

  for (let i = 1; i < n; i++) {
      if (s[i] === s[i - 1]) {
          let left = i - 2;
          let right = i + 1;

          while (left >= 0 && right < n && s[left] === s[right]) {
              left--;
              right++;
          }

          dp[i] = right - left - 1;

          if (dp[i] > maxLen) {
              maxLen = dp[i];
              start = left + 1;
          }
      }

      let left = i - 1;
      let right = i + 1;

      while (left >= 0 && right < n && s[left] === s[right]) {
          left--;
          right++;
      }

      dp[i] = right - left - 1;
      if (dp[i] > maxLen) {
          maxLen = dp[i];
          start = left + 1;
      }
  }

  return s.slice(start, start + maxLen);
};