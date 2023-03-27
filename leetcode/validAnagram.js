/**
 * Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let sCharCounts = {};
  let tCharCounts = {};

  for (let char of s) {
      sCharCounts[char] = (sCharCounts[char] || 0) + 1;
  }

  for (let char of t) {
      tCharCounts[char] = (tCharCounts[char] || 0) + 1;
  }

  for (let char in sCharCounts) {
      if (sCharCounts[char] !== tCharCounts[char]) return false;
  }

  return true;
};