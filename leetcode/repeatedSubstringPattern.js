/**
 * Repeated Substring Pattern
 *
 * Given a string s, check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 *
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const length = s.length;

  for (let i = 1; i <= length / 2; i++) {
      if (length % i === 0) {
          const substring = s.slice(0, i);
          const repeated = substring.repeat(length / i);
          if (repeated === s) return true;
      }
  }

  return false;
};