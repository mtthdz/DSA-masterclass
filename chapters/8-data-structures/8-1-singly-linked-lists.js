/**
 * Chapter 8.1 - Singly Linked Lists
 * 
 * Contains a head, tail, and length property.
 * Consists of nodes, where each node has a value and pointer to another node/null.
 * Think of it as a train, where cars are connected to another.
 * No random access; you may not move straight to n=5, you have to iterate through all previous nodes.
 * There are no indexes. If you insert into the middle of an array, every value must be re-indexed,
 * which is why SLL's are better for insertion/deletion.
 * 
 * Example
 * [4]->[6]->[8]->[2]->null
 * Head = 4
 * Tail = 2
 * Length = 4
 * 
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * naive way to add nodes to the end
 * let first = new Node('hi')
 * first.next = new Node('there')
 * first.next.next = new Node('how')
 * first.next.next.next = new Node('are')
 * first.next.next.next.next = new Node ('you')
 */

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length ++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length --;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}