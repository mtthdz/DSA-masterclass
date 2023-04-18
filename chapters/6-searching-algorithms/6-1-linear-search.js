/**
 * Chapter 6.1 - Linear Search
 * 
 * Linear search is the generic approach, where we traverse through
 * an array from 0 to n
 * It's not ideal if the array is sorted
 * 
 * Example 6.1A
 * Write a searching algo that returns the index of a value, or -1 
 * if it doesn't exist.
 * 
 * linearSearch([10, 15, 20, 25, 30], 15)          // 1
 * linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
 * linearSearch([100], 100)                        // 0
 * 
 * O(n) time complexity
 */
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
}