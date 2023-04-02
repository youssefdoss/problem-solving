/**
 * Successful Pairs of Spells and Potions
 *
 * You are given two positive integer arrays spells and potions, of length n and
 * m respectively, where spells[i] represents the strength of the ith spell and
 * potions[j] represents the strength of the jth potion.
 *
 * You are also given an integer success. A spell and potion pair is considered
 * successful if the product of their strengths is at least success.
 *
 * Return an integer array pairs of length n where pairs[i] is the number of
 * potions that will form a successful pair with the ith spell.
 *
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  let pairs = [];
  let spellsLength = spells.length;
  let potionsLength = potions.length;
  potions.sort((a, b) => a - b);

  for (let i = 0; i < spellsLength; i++) {
      const lowestSuccess = binarySearch(potions, success / spells[i]);
      pairs.push(potionsLength - lowestSuccess);
  }

  return pairs;
};

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let i = -1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] >= target) {
          i = mid;
          right = mid - 1;
      } else {
          left = mid + 1;
      }
  }

  return i === -1 ? arr.length : i;
}