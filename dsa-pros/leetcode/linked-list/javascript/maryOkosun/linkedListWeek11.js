function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  var nextNode = null; //initialize three variable

  while (curr !== null) {
    nextNode = curr.next; //save the next of current node in the nextNode variable
    curr.next = prev; // update the next pointer of curr to the prev(null at 1st time)
    prev = curr; // update prev (null at 1st time) to current
    curr = nextNode; //update curr to the nextNode
  }

  return prev;
};

// head = new Node(85);
// head.next = new Node(15);
// head.next.next = new Node(4);
// head.next.next.next = new Node(20);
// head = reverseList(head);
// console.log(reverseList(head));
