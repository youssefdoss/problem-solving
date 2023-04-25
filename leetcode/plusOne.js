/**
 * Plus One
 *
 * You are given a large integer represented as an integer array digits, where
 * each digits[i] is the ith digit of the integer. The digits are ordered from
 * most significant to least significant in left-to-right order. The large
 * integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let length = digits.length;

  if (digits[length - 1] + 1 < 10) {
      digits[length - 1]++;
      return digits;
  }

  digits[length - 1] = (digits[length - 1] + 1) % 10;
  let i = length - 1;

  while (digits[i] === 0) {
      if (i === 0) {
          digits.unshift(1);
          break;
      }

      i--;
      digits[i] = (digits[i] + 1) % 10
  }

  return digits;
};