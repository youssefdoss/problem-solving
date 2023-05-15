/**
 * Island Perimeter
 *
 * You are given row x col grid representing a map where grid[i][j] = 1
 * represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally). The grid
 * is completely surrounded by water, and there is exactly one island (i.e., one
 * or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected to
 * the water around the island. One cell is a square with side length 1. The
 * grid is rectangular, width and height don't exceed 100. Determine the
 * perimeter of the island.
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;
  let height = grid.length;
  let width = grid[0].length;

  function traverse(i, j) {
      if (i < 0 || j < 0 || i >= height || j >= width || grid[i][j] === 0) {
          perimeter++;
          return;
      }

      if (grid[i][j] === -1) return;

      grid[i][j] = -1;

      traverse(i - 1, j);
      traverse(i + 1, j);
      traverse(i, j - 1);
      traverse(i, j + 1);
  }

  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (grid[i][j] === 1) {
              traverse(i, j);
              break;
          }
      }
      if (perimeter > 0) break;
  }

  return perimeter;
};