/**
 * Find the index of the First Occurrence in a string
 *
 * Given two strings needle and haystack, return the index of the first
 * occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let needleLength = needle.length;

  for (let i = 0; i <= haystack.length - needleLength; i++) {
      const possibleMatch = haystack.slice(i, i + needleLength);
      if (possibleMatch === needle) {
          return i;
      }
  }

  return -1;
};