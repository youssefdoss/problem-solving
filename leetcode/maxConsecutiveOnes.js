/**
 * Max Consecutive Ones
 *
 * Given a binary array nums, return the maximum number of consecutive 1's in
 * the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          let currMax = 1;
          let j = i + 1;
          while (j < nums.length && nums[j] === 1) {
              currMax++;
              j++;
          }
          max = Math.max(currMax, max);
          i = j - 1;
      }
  }

  return max;
};