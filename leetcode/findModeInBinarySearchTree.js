/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Find Mode in Binary Search Tree
 *
 * Given the root of a binary search tree (BST) with duplicates, return all the
 * mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key. The right subtree of a node contains only nodes with keys
 * greater than or equal to the node's key. Both the left and right subtrees
 * must also be binary search trees.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let modes = [];
  let maxCount = 0;
  let currentCount = 0;
  let prev = null;

  function findModes(node) {
      if (!node) return;

      findModes(node.left);

      if (node.val === prev) {
          currentCount++;
      } else {
          currentCount = 1;
          prev = node.val;
      }

      if (currentCount >= maxCount) {
          if (currentCount > maxCount) {
              modes = [];
              maxCount = currentCount;
          }
          modes.push(node.val);
      }

      findModes(node.right);
  }

  findModes(root);

  return modes;
};