/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Path Sum
 *
 * Given the root of a binary tree and an integer targetSum, return true if the
 * tree has a root-to-leaf path such that adding up all the values along the
 * path equals targetSum.
 *
 * A leaf is a node with no children.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false;
  let stack = [[root, root.val]];

  while (stack.length) {
      const [currNode, currSum] = stack.pop();
      if (!currNode.left && !currNode.right && currSum === targetSum) return true;
      if (currNode.left) {
          stack.push([currNode.left, currSum + currNode.left.val]);
      }
      if (currNode.right) {
          stack.push([currNode.right, currSum + currNode.right.val]);
      }
  }

  return false;
};