/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Kth Smallest Element in a BST
 *
 * Given the root of a binary search tree, and an integer k, return the kth
 * smallest value (1-indexed) of all the values of the nodes in the tree.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const stack = [];
  let count = 0;

  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }

      const currNode = stack.pop();
      count++;

      if (count === k) {
          return currNode.val;
      }

      root = currNode.right;
  }
};