/*-------------------------------------------------------------------------
4. Reverse Linkedlist
-------------------------------------------------------------------------- */
/**
 * Definition for singly-linked list.
 */
class ListNode {
      int val;
      ListNode next;
      ListNode() {}
      ListNode(int val) { this.val = val; }
      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 }
 
class ReverseLinkedList {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode current = head;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
        
    }
}


/*-------------------------------------------------------------------------
5. Linkedlist Cycle
-------------------------------------------------------------------------- */

class HasCycle {
    public boolean hasCycle(ListNode head) {
        if (head == null)
            return false;

        ListNode fast = head;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;

            if (fast == slow)
                return true;
        }

        return false;
        
    }
}


/*-------------------------------------------------------------------------
6. Delete Node in Linkedlist
-------------------------------------------------------------------------- */

class DeleteListNode {
    public void deleteNode(ListNode node) {

        node.val = node.next.val;
        node.next = node.next.next;
        
    }
}


/*-------------------------------------------------------------------------
7. Remove nth node from end of List/
-------------------------------------------------------------------------- */

class RemoveNthNode {
    public ListNode removeNthFromEnd(ListNode head, int n) {

        ListNode newHead = new ListNode(0);
        newHead.next = head;
        ListNode a = newHead;
        ListNode b = newHead;

        while(n > 0){
            b = b.next;
            n--;
        }

        while(b.next != null){
            b = b.next;
            a = a.next;
        }
        
        a.next = a.next.next;
        return newHead.next;
    }      
    
}