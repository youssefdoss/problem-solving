/**
 * K Closest Points to Origin
 *
 * Given an array of points where points[i] = [xi, yi] represents a point on the
 * X-Y plane and an integer k, return the k closest points to the origin (0, 0).
 *
 * The distance between two points on the X-Y plane is the Euclidean distance
 * (i.e., √(x1 - x2)2 + (y1 - y2)2).
 *
 * You may return the answer in any order. The answer is guaranteed to be unique
 * (except for the order that it is in).
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  let closestPoints = [];

  for (let point of points) {
      closestPoints.push([...point, Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))]);
  }

  function sortByDistance(a, b) {
      if (a[2] === b[2]) {
          return 0;
      } else {
          return a[2] > b[2] ? 1 : -1
      }
  }

  return closestPoints.sort(sortByDistance).slice(0, k).map((ele) => [ele[0], ele[1]]);
};