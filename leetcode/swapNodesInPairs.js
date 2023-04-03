/**
 * Swap Nodes in Pairs
 *
 * Given a linked list, swap every two adjacent nodes and return its head. You
 * must solve the problem without modifying the values in the list's nodes
 * (i.e., only nodes themselves may be changed.)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
      return head;
  }

  let prev = null;
  let curr = head;

  while (curr && curr.next) {
      let node1 = curr;
      let node2 = curr.next;

      node1.next = node2.next;
      node2.next = node1;

      if (prev) {
          prev.next = node2;
      } else {
          head = node2;
      }
      prev = node1;
      curr = node1.next;
  }

  return head;
};