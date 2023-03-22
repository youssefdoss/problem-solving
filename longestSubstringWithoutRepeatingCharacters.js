/**
 * Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let seen = new Set();
  let start = 0;
  let maxLength = 0;

  for (let end = 0; end < s.length; end++) {
      while (seen.has(s[end])) {
          seen.delete(s[start]);
          start++;
      }

      seen.add(s[end]);
      maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};