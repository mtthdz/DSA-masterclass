/**
 * Chapter 8.5: Tree Traversal
 * 
 * Two ways to traverse a tree, (1) breadth first, and (2) depth first.
 * In essence BFS is horizontal, DFS is vertical.
 * 
 * Breadth first search
 * We want to visit every sibling node in a row before traversing down
 * the tree.
 * We typically use a queue to track progression
 * Starting at the root, we check for left then right. Each visited node will
 * be tracked via queue, and then later moved into the returned arr
 * 
 * Illustration:
 *    10
 *  6    15
 * 3 8     20
 * 
 * 1 - queue [10]        visited []
 * 2 - queue [6, 15]     visited [10]
 * 3 - queue [15]        visited [10, 6]
 * 4 - queue [15, 3, 8]  visited [10, 6]
 * 5 - queue [3, 8, 20]  visited [10, 6, 15]
 */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  BFS() {
    let data  = [];
    let queue = [];
    let node  = this.root;

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}