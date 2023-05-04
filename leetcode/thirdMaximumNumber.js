/**
 * Third Maximum Number
 *
 * Given an integer array nums, return the third distinct maximum number in this
 * array. If the third maximum does not exist, return the maximum number.
 *
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let numsSet = new Set(nums);
  if (numsSet.size < 3) return Math.max(...numsSet);
  numsSet.delete(Math.max(...numsSet));
  numsSet.delete(Math.max(...numsSet));
  return Math.max(...numsSet);
};