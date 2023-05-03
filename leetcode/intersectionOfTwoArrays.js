/**
 * Intersection of Two Arrays
 *
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must be unique and you may return
 * the result in any order.
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let seen = new Set(nums1);
  let intersection = new Set();

  for (let i = 0; i < nums2.length; i++) {
      if (seen.has(nums2[i])) {
          intersection.add(nums2[i]);
      }
  }

  return Array.from(intersection);
};