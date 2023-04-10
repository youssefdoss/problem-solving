/**
 * Top K Frequent Elements
 *
 * Given an integer array nums and an integer k, return the k most frequent
 * elements. You may return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let counts = {};

  for (let i = 0; i < nums.length; i++) {
      counts[nums[i]] = (counts[nums[i]] || 0) + 1;
  }

  let entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  return entries.slice(0, k).map(entry => Number(entry[0]));
};