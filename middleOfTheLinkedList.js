/**
 * Middle of the Linked List
 *
 * Given the head of a singly linked list, return the middle node of the linked
 * list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  if (head.next === null) {
      return head;
  }

  let indexedNodes = [head];
  let currNode = head.next;

  while (currNode) {
      indexedNodes.push(currNode);
      currNode = currNode.next;
  }

  if (indexedNodes.length % 2 === 0) {
      return indexedNodes[Math.ceil(indexedNodes.length / 2)];
  } else {
      return indexedNodes[Math.ceil(indexedNodes.length / 2) - 1];
  }
};