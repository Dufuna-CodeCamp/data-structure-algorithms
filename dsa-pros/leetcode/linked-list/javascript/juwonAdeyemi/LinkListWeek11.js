// @param {ListNode} head
//  @return {ListNode}

var reverseList = function (head) {
  if (!head || !head.next) {
  }
  let previous = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let A = head;
  let B = head;

  while (B && B.next) {
    A = A.next;
    B = B.next.next;

    if (A === B) {
      return true; // Cycle detected
    }
  }

  return false; // No cycle foun
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) {
    return null; // Empty list
  }

  let A = head;
  let B = head;
  let prev = null;

  // Move the fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
    if (!B) {
      return head; // n is greater than the length of the list
    }
    B = B.next;
  }

  // Move both pointers simultaneously until fast reaches the end
  while (B) {
    prev = A;
    A = A.next;
    B = B.next;
  }

  if (!prev) {
    return head.next; // Remove the head node
  }

  prev.next = A.next; // Remove the nth node

  return head;
};
