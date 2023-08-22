class MyLinkedList {
    Node head;
    int length;


    class Node {
        int val;
        Node next;

        Node(int data) {
            val = data;
            next = null;
        }
    }

    public MyLinkedList() {
        this.head = null;
        this.length = 0;
        
    }
    
    public int get(int index) {
        if (index >= length) {
            return -1;
        }
        int currIndex = 0;

        Node currNode = head;

        while (currIndex < index) {
            currIndex++;
            currNode = currNode.next;
        }

        return currNode.val;
        
    }
    
    public void addAtHead(int val) {
        Node newNode = new Node(val);

        newNode.next = head; 

        head = newNode;

        length++;
    }
    
    public void addAtTail(int val) {
        if (head == null) {
            addAtHead(val);
        } else {
            Node newNode = new Node(val);

            newNode.next = null;

            Node currNode = head;
            while (currNode.next != null) {
                currNode = currNode.next;
            }

            currNode.next = newNode;
            length++;
        }
        
    }
    
    public void addAtIndex(int index, int val) {
        if (index > length) {
            return;
        }
        if (index == 0) {
            addAtHead(val);
        } else {
            Node newNode = new Node(val);

            int currIndex = 1;

            Node currNode = head;

            while (currIndex < index) {
                currNode = currNode.next;
                currIndex++;
            }

            Node next = currNode.next;
            currNode.next = newNode;
            newNode.next = next;

            length++;
        }
    }
    
    public void deleteAtIndex(int index) {
        if (index >= length) {
            return;
        }
        if (index == 0) {
            head = head.next;
            length--;
        } else {
            int currIndex = 1;
        
            Node currNode = head;

            while (currIndex < index) {
                currIndex++;
                currNode = currNode.next;
            }

            currNode.next = currNode.next.next;
            length--;
        }
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */