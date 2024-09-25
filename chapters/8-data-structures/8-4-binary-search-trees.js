/**
 * Chapter 8.4 - Binary Search Trees
 * 
 * Trees consist of nodes in a parent > child relationship.
 * 'Roots' are the top node in a tree, and 'leafs' are nodes with no children.
 * 
 * Binary trees can have at most two children.
 * Binary search trees (BST) are like trees, but are specifically sorted;
 * nodes to the left of a node are less than, nodes right of are greater than.
 * BST's are performant wrt searching and insertions.
 * 
 * BST Example:
 *      10
 *    /    \
 *    6    15
 *   / \    \
 *   3 8    20
 * 
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
   * Inserted values will automatically place in correct place
   * If root exists, we'll want to check if current node is 
   * greater or less than the new node. We traverse the tree accordingly
   * to place new node.
   */
  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      // handles left
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;

      // handles right
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /**
   * similar functionality to insertion
   */
  contains(value) {
    if (!this.root) return undefined;
    
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    return false;
  }
}

/**
 * Naive insertion
 *
 * let tree = new BST();
 * tree.root = new Node(10);
 * tree.root.right = new Node(15);
 * tree.root.left = new Node(7);
 * tree.root.left.right = new Node(9);
 */
