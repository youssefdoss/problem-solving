/**
 * First Missing Positive
 *
 * Given an unsorted integer array nums, return the smallest missing positive
 * integer.
 *
 * You must implement an algorithm that runs in O(n) time and uses constant
 * extra space.
 *
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums = new Set(nums);
  let value = 1;

  while (true) {
      if (nums.has(value)) {
          value++;
      } else {
          break;
      }
  }

  return value;
};