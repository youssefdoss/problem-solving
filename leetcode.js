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

/**
 * Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
      const middle = Math.floor((right + left) / 2);
      if (target === nums[middle]) {
          return middle
      } else if (target > nums[middle]) {
          left = middle + 1;
      } else {
          right = middle - 1;
      }
  }

  return -1
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Lowest Common Ancestor of a Binary Search Tree
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node
 * of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null || root === p || root === q) {
      return root;
  }

  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }

  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Balanced Binary Tree
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (root === null) {
      return true;
  }

  let leftHeight = getHeight(root.left);
  let rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) {
      return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
};

/**
 * Gets maximum height of a branch from a given node
 *
 * @param {TreeNode} node
 * @return {number}
 */
function getHeight(node) {
  if (node === null) {
      return 0;
  }

  let leftHeight = getHeight(node.left);
  let rightHeight = getHeight(node.right);

  return Math.max(leftHeight, rightHeight) + 1;
}

////////////////////////////////////////////////////////////////////////////////

/**
 * Linked List Cycle
 *
 * Given head, the head of a linked list, determine if the linked list has a
 * cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that can
 * be reached again by continuously following the next pointer. Internally, pos
 * is used to denote the index of the node that tail's next pointer is connected
 * to. Note that pos is not passed as a parameter.
 *
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fast = head;

  while (fast && fast.next) {
      head = head.next;
      fast = fast.next.next;
      if (head === fast) {
          return true;
      }
  }

  return false;
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Implement Queue using Stacks
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The
 * implemented queue should support all the functions of a normal queue (push,
 * peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
 */
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
      }
  }

  return this.stack2.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
      }
  }

  return this.stack2[this.stack2.length - 1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/

////////////////////////////////////////////////////////////////////////////////

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * First bad version
 *
 * You are a product manager and currently leading a team to develop a new
 * product. Unfortunately, the latest version of your product fails the quality
 * check. Since each version is developed based on the previous version, all the
 * versions after a bad version are also bad.
 *
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first
 * bad one, which causes all the following ones to be bad.
 *
 * You are given an API bool isBadVersion(version) which returns whether version
 * is bad. Implement a function to find the first bad version. You should
 * minimize the number of calls to the API.
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      nBad = n;
      nGood = 0;

      while (nBad - nGood > 1) {
          let nCurr = Math.floor((nBad + nGood) / 2);
          if (isBadVersion(nCurr)) {
              nBad = nCurr;
          } else {
              nGood = nCurr;
          }
      }

      return nBad;
  };
};

////////////////////////////////////////////////////////////////////////////////

/**
 * Ransom Note
 *
 * Given two strings ransomNote and magazine, return true if ransomNote can be
 * constructed by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote) return false;

  ransomChars = {};
  magazineChars = {};

  for (let char of ransomNote) {
      ransomChars[char] = (ransomChars[char] || 0) + 1;
  }

  for (let char of magazine) {
      magazineChars[char] = (magazineChars[char] || 0) + 1;
  }

  for (let char in ransomChars) {
      if (ransomChars[char] > magazineChars[char] || !magazineChars[char]) return false;
  }

  return true;
};

////////////////////////////////////////////////////////////////////////////////

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

Return the modified image after performing the flood fill.
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