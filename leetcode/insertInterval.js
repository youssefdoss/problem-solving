/**
 * Insert Interval
 *
 * You are given an array of non-overlapping intervals intervals where interval
 * [i] = [starti, endi] represent the start and the end of the ith interval and
 * intervals is sorted in ascending order by starti. You are also given an
 * interval newInterval = [start, end] that represents the start and end of
 * another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted in
 * ascending order by starti and intervals still does not have any overlapping
 * intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const result = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
      result.push(intervals[i]);
      i++;
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
      i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
      result.push(intervals[i]);
      i++;
  }

  return result;
};