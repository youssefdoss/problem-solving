/**
 * Find All Numbers Disappeared in an Array
 *
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in
 * nums.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
          nums[index] = -nums[index];
      }
  }

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
          result.push(i + 1);
      }
  }

  return result;
};