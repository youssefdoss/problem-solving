/**
 * Combination Sum II
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sum to target.
 *
 * Each number in candidates may only be used once in the combination.
 *
 * Note: The solution set must not contain duplicate combinations.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const dfs = (startIndex, currentSum, combination, used) => {
      if (currentSum === target) {
          result.push(combination.slice());
          return;
      }

      for (let i = startIndex; i < candidates.length; i++) {
          if (currentSum + candidates[i] > target) {
              continue;
          }
          if (used[i]) {
              continue;
          }
          if (i > startIndex && candidates[i] === candidates[i-1] && !used[i-1]) {
              continue;
          }

          combination.push(candidates[i]);
          used[i] = true;
          dfs(i, currentSum + candidates[i], combination, used);
          combination.pop();
          used[i] = false;
      }
  };

  dfs(0, 0, [], new Array(candidates.length).fill(false));

  return result;
};