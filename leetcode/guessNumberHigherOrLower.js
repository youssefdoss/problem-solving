/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * Guess Number Higher or Lower
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is
 * higher or lower than your guess.
 *
 * Return the number that I picked.
 *
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (guess(mid) === 0) {
          return mid;
      } else if (guess(mid) === 1) {
          left = mid + 1;
      } else {
          right =  mid - 1;
      }
  }
};