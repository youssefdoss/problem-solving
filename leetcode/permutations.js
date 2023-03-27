/**
 * Permutations
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let results = [];

  function backTrack(path) {
      if (path.length === nums.length) {
          results.push(path);
          return
      }
      for (let i = 0; i < nums.length; i++) {
          if (!path.includes(nums[i])) {
              backTrack([...path, nums[i]]);
          }
      }
  }

  backTrack([]);
  return results;
};