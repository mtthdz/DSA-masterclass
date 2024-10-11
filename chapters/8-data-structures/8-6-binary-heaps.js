/**
 * Chapter 8.6 - Binary Heaps
 * 
 * Binary heaps are a type of tree. Two types of heaps covered: min and max
 * In a max heap, parent notes are always larger than the children, min is the
 * opposite.
 * 
 * We'll be looking at max heaps
 * 
 * They are binary trees so only two children max, but there's no specific
 * order of nodes (like with BST's), other than parents being larger.
 * Basically, BST's are sorted horizontally, BH's are sorted vertically.
 * BH's are compact: all children of each node are as full as possible,
 * and left children are filled out first.
 * 
 * Max heap:
 * 
 *        100
 *       /   \
 *      19   36
 *     / \   / \
 *    17 3  25 1
 *   / \
 *  2  7
 * 
 * These are commonly used for priority queues and graphs
 * Heaps are stored in an array with indices:
 * 
 * 100 19 36 17 3  25 1  2  7
 *  0  1  2  3  4  5  6  7  8
 * 
 * We require math to determine children nodes.
 * left child  = 2n + 1
 * right child = 2n + 2
 * 
 * To determine parent nodes:
 * parent = (n - 1)/2 (floored)
 */
class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  
  /**
   * Insert
   * 
   * push value into heap,
   * "Bubble up" the value to its correct spot
   * 
   * we do this by:
   * 1. finding last item n in heap, and its parent
   * 2. compare n with parent, and swap whatever is larger
   * 3. continue repeating process if n > parent
   * 
   * what's happening:
   * 0 [41, 39, 33, 18, 27, 12, 55]
   *     0   1   2   3   4   5   6
   * 
   * 1 [41, 39, 33, 18, 27, 12, 55]
   * 2 [41, 39, 55, 18, 27, 12, 33] 55 swapped 33
   * 3 [55, 39, 41, 18, 27, 12, 33] 55 swapped 41
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const element = this.values[currentIndex];

    while(true) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (parentValue => element) break;

      this.values[parentIndex] = element;
      this.values[currentIndex] = parentValue;
    }
  }
}