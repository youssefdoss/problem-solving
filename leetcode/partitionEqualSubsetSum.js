/**
 * Partition Equal Subset Sum
 *
 * Given an integer array nums, return true if you can partition the array into
 * two subsets such that the sum of the elements in both subsets is equal or
 * false otherwise.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) {
    return false;
  }
  const target = sum / 2;
  const dp = new Array(nums.length + 1)
    .fill(false)
    .map(() => new Array(target + 1).fill(false));

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[nums.length][target];
};