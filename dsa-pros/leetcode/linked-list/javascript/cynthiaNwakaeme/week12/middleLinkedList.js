/**
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

/********
 * diagram-1
 f
 1 --> 2 --> 3 --> 4 --> 5 --> 6
 s

 * diagram-2
             f
 1 --> 2 --> 3 --> 4 --> 5 --> 6
       s

 * diagram-3
                         f
 1 --> 2 --> 3 --> 4 --> 5 --> 6
             s

 * diagram-4
                               f
 1 --> 2 --> 3 --> 4 --> 5 --> 6
                   s
 **********/

const middleNode = function (head) {
  let slow = head ;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow; // slow in this case will be the mid-element by the time fast reached the end
};


middleNode([1,2,3,4,5,6])