/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Remove Linked List Elements
 *
 * Given the head of a linked list and an integer val, remove all the nodes of
 * the linked list that has Node.val == val, and return the new head.
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head && head.val === val) {
      head = head.next;
  }

  let currNode = head;
  while (currNode && currNode.next) {
      if (currNode.next.val === val) {
          currNode.next = currNode.next.next;
      } else {
          currNode = currNode.next;
      }
  }

  return head;
};