/**
 * Chapter 8.5 - Tree Traversal
 * 
 * Two ways to traverse a tree, (1) breadth first, and (2) depth first.
 * In essence BFS is horizontal, DFS is vertical.
 * 
 * When to use BFS vs DFS? Depends on structure of tree, considering we have
 * space complexity to worry about, due to recursive fns below (call stack).
 * For very wide trees, DFS has less space complexity.
 * For very thin trees, BFS works better (space complexity doesn't take a hit)
 * 
 * When to use variants of DFS?
 * Notice that each variant returns a different sort order, InOrder returns
 * numeric order (least to greatest).
 * PreOrder returns an array that can be duplicated/flattened, where you 
 * always know where the tree root is; makes it easy to recreate. 
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
   * stack 1 - current: 10,  [10, 6]                 left = true
   * stack 2 - current: 6,   [10, 6, 3]              left = true
   * stack 3 - current: 3,   [10, 6, 3, 8]           left = false, right = true
   * stack 2 - current: 15,  [10, 6, 3, 8, 15]       left = false, right = true
   * stack 1 - current: 20,  [10, 6, 3, 8, 15, 20]   left = false, right = true
   * 
   * Remembering that each recursive fn in the stack has its own memory, once stack 3
   * returns no left nor right, it'll close and go to stack 2, repeating.
   */
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }

  /**
   * Similar to preorder, but we visit siblings before returning parent. 
   * Note that it's the same function as preorder, but we won't push the node until
   * we check both left & right.
   * 
   * illustration:
   *     10
   *  6    15
   * 3 8     20
   * 
   * [3, 8, 6, 20, 15, 10]
   * 
   */
  DFSPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  /**
   * Very similar to preorder, but we traverse all of left before we look at right.
   * Notice that inorder returns array in numeric order (least to greatest)
   * 
   * illustration:
   *     10
   *  6    15
   * 3 8     20
   * 
   * [3, 6, 8, 10, 15, 20]
   */
  DFSInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}