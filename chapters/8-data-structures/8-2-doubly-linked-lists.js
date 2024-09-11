/**
 * Chapter 8.2 - Doubly Linked Lists
 * 
 * Same structure as SLL, however has a pointer to the previous (and next) node.
 * Unlike SLL's, where finding the tail requires traversing from the head, we may
 * move backwards (via .previous)
 * 
 * Example
 * null<-[4]<->[6]<->[8]<->[2]->null
 */
class Node {
  constructor(val) {
    this.val = val; 
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Create new node with val
   * if !head, set head + tail
   * if head, set node on tail
   * then, set node.prev
   * then, increment
   */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else {
      // difference with SLL
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  /**
   * instance current tail
   * if !head, return undefined
   * if length === 1, set head/tail = null
   * update tail to node.prev
   * set new tail to node.next = null
   */
  pop() {
    if (!this.head) return undefined;
    
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length --;
    return this;
  }
}