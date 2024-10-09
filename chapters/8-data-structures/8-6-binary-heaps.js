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