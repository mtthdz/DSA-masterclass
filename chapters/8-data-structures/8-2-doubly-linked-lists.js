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
    
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length --;
    return this;
  }

  /**
   * Opposite of push, at the head rather than tail.
   * if !head, set head + tail
   * if head, set node.prev
   * then, set node.head
   * then, increment
   */
  unshift(val) {
    let newNode = new Node(val);
  
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;

    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;
    return this;
  }

  /**
   * Opposite of pop; at the head rather than tail.
   * if !head, return undefined
   * store current head as "old head"
   * if length === 1
   *  set head && tail = null
   *  update head as node.next of old head
   *  set head.prev to null
   */
  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;

    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;

    this.length --;
    return this;
  }

  /**
   * Find middle
   * traverse from head/tail depending on middle
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let middle = this.length / 2;
    let count, current;

    if (index <= middle) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count ++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count --;
      }
    }
    return current;
  }
}