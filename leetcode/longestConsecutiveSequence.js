/**
 * Longest Consecutive Sequence
 *
 * Given an unsorted array of integers nums, return the length of the longest
 * consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const numsSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numsSet) {
      if (!numsSet.has(num - 1)) {
          let currentNum = num;
          let currentStreak = 1;

          while (numsSet.has(currentNum + 1)) {
              currentNum++;
              currentStreak++;
          }

          longestStreak = Math.max(longestStreak, currentStreak);
      }
  }

  return longestStreak;
};