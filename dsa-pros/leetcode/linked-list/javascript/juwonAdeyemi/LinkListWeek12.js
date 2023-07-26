var middleNode = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  console.log(slowPointer);
  console.log(fastPointer);
  return slowPointer;
};

var removeElements = function (head, val) {
  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;
  let prev = null;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }
    current = current.next;
  }
  return head;
};
