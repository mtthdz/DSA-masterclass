/**
 * Chapter 8.5: Tree Traversal
 * 
 * Two ways to traverse a tree, (1) breadth first, and (2) depth first.
 * In essence BFS is horizontal, DFS is vertical.
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

  /**
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

  /**
   * Depth first search, preorder
   * We want to visit every child node below to the left first, and then check right
   * We'll recursively check left to right for every node
   * 
   * illustration:
   *     10
   *  6    15
   * 3 8     20
   * 
   * returns: [10, 6, 3, 8, 15, 20]
   */
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}