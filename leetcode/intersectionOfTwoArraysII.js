/**
 * Intersection of Two Arrays II
 *
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must appear as many times as it
 * shows in both arrays and you may return the result in any order.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let frequencies = {};
  let intersection = [];

  for (let num of nums1) {
      frequencies[num] = (frequencies[num] || 0) + 1;
  }

  for (let num of nums2) {
      if (frequencies[num]) {
          intersection.push(num);
          frequencies[num]--;
          if (frequencies[num] === 0) {
              delete frequencies[num];
          }
      }
  }

  return intersection
};