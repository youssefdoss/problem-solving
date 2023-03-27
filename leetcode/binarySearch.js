/**
 * Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
      const middle = Math.floor((right + left) / 2);
      if (target === nums[middle]) {
          return middle
      } else if (target > nums[middle]) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }

  return -1
};