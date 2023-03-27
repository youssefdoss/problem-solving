/**
 * Climbing Stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n < 2) {
      return 1;
  }

  let numWays = [1,1];

  for (let i = 2; i <= n; i++) {
      numWays[i] = numWays[i - 1] + numWays[i - 2];
  }

  return numWays[n]
};