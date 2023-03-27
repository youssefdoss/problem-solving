/**
 * Majority Element
 *
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You
 * may assume that the majority element always exists in the array.
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let candidate;

  for (let i = 0; i < nums.length; i++) {
      if (count === 0) {
          candidate = nums[i];
      }

      if (candidate === nums[i]) {
          count++;
      } else {
          count--;
      }
  }

  return candidate;
};