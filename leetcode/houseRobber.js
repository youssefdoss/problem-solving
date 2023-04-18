/**
 * House Robber
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping you
 * from robbing each of them is that adjacent houses have security systems
 * connected and it will automatically contact the police if two adjacent houses
 * were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let maxOne = 0;
  let maxTwo = 0;

  for (let num of nums) {
      const currentMax = Math.max(num + maxTwo, maxOne);
      maxTwo = maxOne;
      maxOne = currentMax;
  }

  return maxOne;
};