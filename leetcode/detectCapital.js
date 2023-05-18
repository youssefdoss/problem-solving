/**
 * Detect Capital
 *
 * We define the usage of capitals in a word to be right when one of the
 * following cases holds:
 *
 * All letters in this word are capitals, like "USA". All letters in this word
 * are not capitals, like "leetcode". Only the first letter in this word is
 * capital, like "Google".
 *
 * Given a string word, return true if the usage of capitals in it is right.
 *
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length === 1) return true;

  if (word[0] === word[0].toUpperCase() && word[1] === word[1].toLowerCase()) {
      for (let i = 2; i < word.length; i++) {
          if (word[i] !== word[i].toLowerCase()) return false;
      }

      return true;
  } else if (word[0] === word[0].toUpperCase()) {
      for (let i = 1; i < word.length; i++) {
          if (word[i] !== word[i].toUpperCase()) return false;
      }

      return true;
  } else {
      for (let i = 1; i < word.length; i++) {
          if (word[i] !== word[i].toLowerCase()) return false;
      }

      return true;
  }
};