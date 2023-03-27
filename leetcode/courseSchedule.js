/**
 * Course Schedule
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to
 * numCourses - 1. You are given an array prerequisites where prerequisites[i]
 * = [ai, bi] indicates that you must take course bi first if you want to take
 * course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to
 * first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const adjList = Array(numCourses).fill().map(() => []);
  const inDegree = Array(numCourses).fill(0);
  for (const [course, prereq] of prerequisites) {
      adjList[prereq].push(course);
      inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) {
      queue.push(i);
      }
  }

  let count = 0;
  while (queue.length > 0) {
      const curr = queue.shift();
      count++;
      for (const next of adjList[curr]) {
      inDegree[next]--;
      if (inDegree[next] === 0) {
          queue.push(next);
      }
      }
  }

  return count === numCourses;
};