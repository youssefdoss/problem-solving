/**
 * Summary Ranges
 *
 * You are given a sorted unique integer array nums.
 *
 * A range [a,b] is the set of all integers from a to b (inclusive).
 *
 * Return the smallest sorted list of ranges that cover all the numbers in the
 * array exactly. That is, each element of nums is covered by exactly one of the
 * ranges, and there is no integer x such that x is in one of the ranges but not
 * in nums.
 *
 * Each range [a,b] in the list should be output as:
 *
 * "a->b" if a != b "a" if a == b
 *
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  let start = nums[0];
  let end = nums[0];
  let ranges = [];

  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i-1] + 1) {
          end = nums[i];
      } else {
          if (start !== end) {
              ranges.push(`${start}->${end}`);
              start = nums[i];
              end = nums[i];
          } else {
              ranges.push(end.toString());
              start = nums[i];
              end = nums[i];
          }
      }
  }

  if (start !== end) {
      ranges.push(`${start}->${end}`);
  } else {
      ranges.push(end.toString());
  }

  return ranges;
};