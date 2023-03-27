/**
 * Maximum Subarray
 *
 * Given an integer array nums, find the subarray with the largest sum, and
 * return its sum.
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};