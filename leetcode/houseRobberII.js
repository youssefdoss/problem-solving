/**
 * House Robber II
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed. All houses at this place are
 * arranged in a circle. That means the first house is the neighbor of the last
 * one. Meanwhile, adjacent houses have a security system connected, and it will
 * automatically contact the police if two adjacent houses were broken into on
 * the same night.
 *
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the
 * police.
 *
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  function robFirst(nums) {
      let maxOne = 0;
      let maxTwo = 0;

      for (let i = 0; i < nums.length - 1; i++) {
          const maxCurrent = Math.max(nums[i] + maxTwo, maxOne);
          maxTwo = maxOne;
          maxOne = maxCurrent;
      }

      return maxOne;
  }

  function robLast(nums) {
      let maxOne = 0;
      let maxTwo = 0;

      for (let i = 1; i < nums.length; i++) {
          const maxCurrent = Math.max(nums[i] + maxTwo, maxOne);
          maxTwo = maxOne;
          maxOne = maxCurrent;
      }

      return maxOne;
  }

  return Math.max(robFirst(nums), robLast(nums));
};