/**
 * First Unique Character in a String
 *
 * Given a string s, find the first non-repeating character in it and return its
 * index. If it does not exist, return -1.
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let counts = new Map();

  for (let char of s) {
      let currCount = counts.get(char);
      if (currCount) {
          counts.set(char, currCount + 1);
      } else {
          counts.set(char, 1);
      }
  }

  for (let i = 0; i < s.length; i++) {
      if (counts.get(s[i]) === 1) return i;
  }

  return -1;
};