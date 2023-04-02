/**
 * Letter Combinations of a Phone Number
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent. Return the answer in any
 * order.
 *
 * A mapping of digits to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

const digitToLetters = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

const combinations = [''];

for (let i = 0; i < digits.length; i++) {
  const letters = digitToLetters[digits[i]];
  const newCombinations = [];

  for (let j = 0; j < combinations.length; j++) {
    for (let k = 0; k < letters.length; k++) {
      newCombinations.push(combinations[j] + letters[k]);
    }
  }

  combinations.splice(0, combinations.length, ...newCombinations);
}

return combinations;
};