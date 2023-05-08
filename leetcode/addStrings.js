/**
 * Add Strings
 *
 * Given two non-negative integers, num1 and num2 represented as string, return
 * the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the inputs to
 * integers directly.
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0;
  let sum = '';
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
      const digit1 = i >= 0 ? +num1[i] : 0;
      const digit2 = j >= 0 ? +num2[j] : 0;
      const currSum = carry + digit1 + digit2;
      sum = (currSum % 10) + sum;
      carry = currSum > 9 ? 1 : 0;
      i--;
      j--;
  }

  if (carry > 0) {
      sum = carry + sum;
  }

  return sum
};