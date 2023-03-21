/**
 * Matrix
 *
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for
 * each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const queue = [];

  const dist = new Array(rows).fill().map(() => new Array(cols).fill(-1));

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (mat[r][c] === 0) {
              queue.push([r, c]);
              dist[r][c] = 0;
          }
      }
  }

  while (queue.length) {
      const [r, c] = queue.shift();
      const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

      for (let [dr, dc] of dirs) {
          const nr = r + dr;
          const nc = c + dc;

          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && dist[nr][nc] === -1) {
              dist[nr][nc] = dist[r][c] + 1;
              queue.push([nr, nc]);
          }
      }
  }

  return dist;
};