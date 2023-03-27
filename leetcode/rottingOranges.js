/**
 * Rotting Oranges
 *
 * You are given an m x n grid where each cell can have one of three values:
 *
 * 0 representing an empty cell,
 * 1 representing a fresh orange, or
 * 2 representing a rotten orange.
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten
 * orange becomes rotten.
 *
 * Return the minimum number of minutes that must elapse until no cell has a
 * fresh orange. If this is impossible, return -1.
 *
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let fresh = new Set();
  let rotten = [];

  for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
          if (grid[i][j] === 1) {
              fresh.add(`${i}, ${j}`);
          } else if (grid[i][j] === 2) {
              rotten.push([i, j]);
          }
      }
  }

  let minutes = 0;

  while (fresh.size && rotten.length) {
      let n = rotten.length;

      for (let i = 0; i < n; i++) {
          let [x, y] = rotten.shift();
          if (fresh.has(`${x - 1}, ${y}`)) {
              fresh.delete(`${x - 1}, ${y}`);
              rotten.push([x - 1, y]);
          }
          if (fresh.has(`${x + 1}, ${y}`)) {
              fresh.delete(`${x + 1}, ${y}`);
              rotten.push([x + 1, y]);
          }
          if (fresh.has(`${x}, ${y - 1}`)) {
              fresh.delete(`${x}, ${y - 1}`);
              rotten.push([x, y - 1]);
          }
          if (fresh.has(`${x}, ${y + 1}`)) {
              fresh.delete(`${x}, ${y + 1}`);
              rotten.push([x, y + 1]);
          }
      }

      minutes++;
  }

  if (fresh.size > 0) {
      return -1;
  }

  return minutes;
};