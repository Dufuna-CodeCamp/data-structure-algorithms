#Design LinkedList

class ListNode:
    def _init_(self, val=0, next=None):
        self.val = val
        self.next = next


class MyLinkedList:
    def _init_(self):
        self.head = None
        self.size = 0

    def get(self, index: int) -> int:
        if index < 0 or index >= self.size:
            return -1

        curr = self.head
        for _ in range(index):
            curr = curr.next
        return curr.val

    def addAtHead(self, val: int) -> None:
        new_node = ListNode(val)
        new_node.next = self.head
        self.head = new_node
        self.size += 1

    def addAtTail(self, val: int) -> None:
        new_node = ListNode(val)
        if self.head is None:
            self.head = new_node
        else:
            curr = self.head
            while curr.next:
                curr = curr.next
            curr.next = new_node
        self.size += 1

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0 or index > self.size:
            return

        if index == 0:
            self.addAtHead(val)
        elif index == self.size:
            self.addAtTail(val)
        else:
            new_node = ListNode(val)
            curr = self.head
            for _ in range(index - 1):
                curr = curr.next
            new_node.next = curr.next
            curr.next = new_node
            self.size += 1

    def deleteAtIndex(self, index: int) -> None:
        if index < 0 or index >= self.size:
            return

        if index == 0:
            self.head = self.head.next
        else:
            curr = self.head
            for _ in range(index - 1):
                curr = curr.next
            curr.next = curr.next.next
        self.size -= 1


#Merge Two Sorted Lists
# Definition for singly-linked list.
# class ListNode(object):
#     def _init_(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
    # Check if either list is empty
        if not list1:
            return list2
        if not list2:
            return list1

    # Initialize a dummy node as the head of the merged list
        dummy = ListNode()
        curr = dummy

    # Merge the two lists
        while list1 and list2:
            if list1.val <= list2.val:
                curr.next = list1
                list1 = list1.next
            else:
                curr.next = list2
                list2 = list2.next
            curr = curr.next

    # Append any remaining nodes from list1 or list2
        if list1:
            curr.next = list1
        if list2:
            curr.next = list2

    # Return the head of the merged list (excluding the dummy node)
        return dummy.next


#Intersection of Two Linked Lists
# Definition for singly-linked list.
# class ListNode(object):
#     def _init_(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        if not headA or not headB:
            return None

    # Find the lengths of the linked lists
        lenA, lenB = getLength(headA), getLength(headB)

    # Move the pointer of the longer list to make the remaining lengths equal
        if lenA > lenB:
            for _ in range(lenA - lenB):
                headA = headA.next
        else:
            for _ in range(lenB - lenA):
                headB = headB.next

    # Move both pointers until they meet or reach the end (intersection)
        while headA != headB:
            headA = headA.next
            headB = headB.next
        
        return headA


def getLength(head):
    length = 0
    while head:
        length += 1
        head = head.next
    return length

