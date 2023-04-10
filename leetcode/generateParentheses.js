/**
 * Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = [];

  function backtrack(str, open, close) {
      if (str.length === n * 2) {
          result.push(str);
          return;
      }

      if (open < n) {
          backtrack(str + '(', open + 1, close);
      }

      if (close < open) {
          backtrack(str + ')', open, close + 1);
      }
  }

  backtrack('', 0, 0);

  return result;
};