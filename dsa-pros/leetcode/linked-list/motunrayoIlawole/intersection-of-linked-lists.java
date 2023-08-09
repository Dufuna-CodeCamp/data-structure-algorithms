class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {

        while (headA != null) {
            ListNode temp = headB;

            while (temp != null) {
                if (headA == temp) {
                    return headA;
                }
                temp = temp.next;
            }

            headA = headA.next;
        }
        return null;
        
    }
}