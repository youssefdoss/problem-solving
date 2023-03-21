/**
 * Flood Fill
 *
 * An image is represented by an m x n integer grid image where image[i][j]
 * represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color. You should perform a
 * flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel, plus any pixels
 * connected 4-directionally to the starting pixel of the same color as the
 * starting pixel, plus any pixels connected 4-directionally to those pixels
 * (also with the same color), and so on. Replace the color of all of the
 * aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 *
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const rows = image.length;
  const cols = image[0].length;
  const originalColor = image[sr][sc];
  if (originalColor === color) {
    return image;
  }
  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || image[r][c] !== originalColor) {
      return;
    }
    image[r][c] = color;
    dfs(r - 1, c);
    dfs(r + 1, c);
    dfs(r, c - 1);
    dfs(r, c + 1);
  };
  dfs(sr, sc); // Start DFS from the starting pixel
  return image;
};