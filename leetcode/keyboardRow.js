/**
 * Keyboard Row
 *
 * Given an array of strings words, return the words that can be typed using
 * letters of the alphabet on only one row of American keyboard like the image
 * below.
 *
 * In the American keyboard:
 *
 * the first row consists of the characters "qwertyuiop", the second row
 * consists of the characters "asdfghjkl", and the third row consists of the
 * characters "zxcvbnm".
 *
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const rows = [
      "qwertyuiopQWERTYUIOP",
      "asdfghjklASDFGHJKL",
      "zxcvbnmZXCVBNM"
  ];
  let result = [];

  for (let word of words) {

      for (let row of rows) {
          let isInRow = true;

          for (let char of word) {
              if (!row.includes(char)) {
                  isInRow = false;
                  break;
              }
          }

          if (isInRow) {
              result.push(word);
              break;
          }
      }
  }

  return result;
};