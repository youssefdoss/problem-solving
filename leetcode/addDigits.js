/**
 * Add Digits
 *
 * Given an integer num, repeatedly add all its digits until the result has only
 * one digit, and return it.
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let numString = num.toString();

  while (numString.length > 1) {
      let currValue = 0;
      for (let i = 0; i < numString.length; i++) {
          currValue += parseInt(numString[i]);
      }
      numString = currValue.toString();
  }

  return parseInt(numString);
};