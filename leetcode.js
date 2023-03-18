/**
 * Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let complements = {};

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (complement in complements) {
          return [complements[complement], i]
      }

      complements[nums[i]] = i
  }
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Valid Parentheses
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let openStack = [];
  const correspondingBrackets = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{' || s[i] === '(' || s[i] === '[') {
      openStack.push(s[i]);
    } else {
      const lastChar = openStack.pop();
      if (correspondingBrackets[s[i]] !== lastChar) {
        return false;
      }
    }
  }

  return openStack.length === 0;
};

////////////////////////////////////////////////////////////////////////////////