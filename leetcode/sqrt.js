/**
 * Sqrt(x)
 *
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0) return 0;

  let left = 1;
  let right = Math.floor(x / 2) + 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const square = mid * mid;

      if (square === x) {
          return mid;
      } else if (square > x) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return right;
};