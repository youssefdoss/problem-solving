/**
 * Word Pattern
 *
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in s.
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const splitS = s.split(' ');
  if (pattern.length !== splitS.length) return false;
  const charToWord = new Map();
  const usedWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i];
      const word = splitS[i];

      if (charToWord.has(char)) {
          if (charToWord.get(char) !== word) {
              return false;
          }
      } else {
          if (usedWords.has(word)) {
              return false;
          }
          charToWord.set(char, word);
          usedWords.add(word);
      }
  }

  return true;
};
