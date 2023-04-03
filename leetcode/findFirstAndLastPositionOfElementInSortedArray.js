/**
 * Find First and Last Position of Element in Sorted Array
 *
 * Given an array of integers nums sorted in non-decreasing order, find the
 * starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let result = [-1, -1]

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          result[0] = mid;
          right = mid - 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  if (result[0] === -1) {
      return result;
  }

  left = result[0];
  right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          result[1] = mid;
          left = mid + 1;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return result;
};