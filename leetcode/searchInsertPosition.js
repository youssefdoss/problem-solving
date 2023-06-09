/**
 * Search Insert Position
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be if
 * it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  if (target < nums[left]) return 0;
  if (target > nums[right]) return right + 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
          return mid;
      } else if (nums[mid] > target) {
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return left;
};