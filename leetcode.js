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

/**
 * Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val <= list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
  } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2
  }
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Best Time to Buy and Sell Stock
 *
 * You are given an array prices where prices[i] is the price of a given stock
 * on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock
 * and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you
 * cannot achieve any profit, return 0.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {

      if (prices[left] < prices[right]) {
          let profit = prices[right] - prices[left];
          max = Math.max(profit, max);
      } else {
          left = right;
      }

      right++;
  }

  return max;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-z]/gi, '');

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i].toLowerCase() !== s[s.length - 1 - i].toLowerCase()) return false;
  }

  return true;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
      return null;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Valid Anagram
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let sCharCounts = {};
  let tCharCounts = {};

  for (let char of s) {
      sCharCounts[char] = (sCharCounts[char] || 0) + 1;
  }

  for (let char of t) {
      tCharCounts[char] = (tCharCounts[char] || 0) + 1;
  }

  for (let char in sCharCounts) {
      if (sCharCounts[char] !== tCharCounts[char]) return false;
  }

  return true;
};

////////////////////////////////////////////////////////////////////////////////