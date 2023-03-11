/**
 * Chapter 2 - Analyzing Performance of Arrays & Objects
 * 
 * Objects are unordered and use key value pairs.
 * Good for fast access/insertion/removal O(1).
 * Searching has to iterate through the object until n is found
 * which can be at random as objects are unordered. Thus, O(n).
 * 
 * Arrays are intrinsicly ordered, just like linked and doubly
 * linked lists.
 * Access is O(1).
 * Searching is O(n).
 * Insertion/removal depends; addition at Arr(n) is O(1) but
 * addition at any other point such as Arr(2) or Arr(0) will
 * shift all of the indices.
 * Push/Pop = O(1)
 * Shift/Unshift = O(n)
 *
 *
 */