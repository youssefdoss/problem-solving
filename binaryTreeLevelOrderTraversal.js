/**
 * Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let result = [];
  let queue = [root];

  while (queue.length) {
      const levelLength = queue.length;
      let currLevel = [];

      for (let i = 0; i < levelLength; i++) {
          const currNode = queue.shift();
          currLevel.push(currNode.val);

          if (currNode.left) queue.push(currNode.left);
          if (currNode.right) queue.push(currNode.right);
      }

      result.push(currLevel);
  }

  return result;
};