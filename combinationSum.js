/**
 * Combination Sum
 *
 * Given an array of distinct integers candidates and a target integer target,
 * return a list of all unique combinations of candidates where the chosen
 * numbers sum to target. You may return the combinations in any order.
 *
 * The same number may be chosen from candidates an unlimited number of times.
 * Two combinations are unique if the frequency of at least one of the chosen
 * numbers is different.
 *
 * The test cases are generated such that the number of unique combinations that
 * sum up to target is less than 150 combinations for the given input.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = [];

  const dfs = (startIndex, currentSum, combination) => {
      if (currentSum === target) {
          result.push(combination.slice());
          return;
      }

      for (let i = startIndex; i < candidates.length; i++) {
          if (currentSum + candidates[i] > target) {
              continue;
          }

          combination.push(candidates[i]);
          dfs(i, currentSum + candidates[i], combination);
          combination.pop();
      }
  };

  dfs(0, 0, []);

  return result;
};