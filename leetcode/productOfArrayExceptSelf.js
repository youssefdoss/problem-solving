/**
 * Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is
 * equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit
 * integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const n = nums.length;
  const result = new Array(n);
  result[0] = 1;

  for (let i = 1; i < n; i++) {
      result[i] = result[i-1] * nums[i-1];
  }

  let right = 1;
  for (let i = n-1; i >= 0; i--) {
      result[i] *= right;
      right *= nums[i];
  }

  return result;
};