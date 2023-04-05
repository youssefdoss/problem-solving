/**
 * Pascal's Triangle
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) return [];

  let triangle = new Array(numRows);
  triangle[0] = [1];

  for (let i = 1; i < numRows; i++) {
      let row = new Array(i + 1);
      row[0] = 1;

      for (let j = 1; j < i; j++) {
          row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }

      row[i] = 1;
      triangle[i] = row;
  }

  return triangle;
};