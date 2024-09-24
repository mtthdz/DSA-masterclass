/**
 * Chapter 8.3 - Stacks & Queues
 * 
 * Stack is a LIFO data structure, think of dinner plates, or undo/redo.
 * Queue is a FIFO data structure, think of produce dept.
 * 
 * Stacks. We may use JS' arr to implement, but shift/unshift is inefficient
 * due to the reindexing of all the subsequent indices.
 * A dedicated stack class means we can strip all methods and indices as we
 * only require push/pop methods. More memory efficient.
 * 
 * Method A: inefficient use of JS Array
 */
let stack = [];
stack.push('')

/**
 * Method B: class methodology
 * 
 * We could copy SLL push/pop, but those methods are not constant timed, 
 * as it requires list iteration via while loop.
 *
 */ 
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * if there is at least one node
   *   - create a temp var that stores the current first
   *   - reset first to newNode
   *   - set next property to temp var
   *   - increment
   */
  push(value) {
    let newNode = new StackNode(value);
    
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;

    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  /**
   * create temp var to store current first
   * if there is more than one node,
   *   - set new first to next of current first
   *   - decrement
   */
  pop() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    let temp = this.first;
    this.first = this.first.next;
    this.size --;
    return temp.value;
  }
}


/**
 * Queues. Similar to stacks, we could use JS arr to implement,
 * but these are inefficient since we only need push/shift.
 */
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new QueueNode(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;

    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}