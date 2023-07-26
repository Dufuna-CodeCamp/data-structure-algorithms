var middleNode = function (head) {
  if (!head) return null;

  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
};

var removeElements = function (head, val) {
  if (!head) return null;

  let pointer = head;
  while (head && head.val === val) {
    head = head.next;
  }
  while (pointer && pointer.next) {
    if (pointer.next.val === val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }

  return head;
};
