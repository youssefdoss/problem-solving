/**
 * Group Anagrams
 *
 * Given an array of strings strs, group the anagrams together. You can return
 * the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let groups = {};

  for (let str of strs) {
      const sortedStr = str.split('').sort().join('');
      if (!groups[sortedStr]) {
          groups[sortedStr] = [str];
      } else {
          groups[sortedStr].push(str);
      }
  }

  return Object.values(groups);
};