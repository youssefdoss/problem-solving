/**
 * Longest Increasing Subsequence
 *
 * Given an integer array nums, return the length of the longest strictly
 * increasing subsequence.
 *
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 1) return 1;

  let dp = new Array(nums.length).fill(1);

  let maxLength = 1;

  for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
};