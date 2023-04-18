/**
 * Chapter 6.2 - Binary Search
 * 
 * Binary search is a much faster form of search
 * Rather than eliminating one element at a time, you
 * can eliminate half of the remaining elements
 * Only works on sorted arrays
 * 
 * Example 6.1A
 * This function accepts a sorted array and a numeric value
 * Use pointers
 * return the value, or return -1
 * 
 * binarySearch([1,2,3,4,5],2)                                  // 1
 * binarySearch([1,2,3,4,5],3)                                  // 2
 * binarySearch([5,6,10,13,18,30,37,40,44,64,79,84,95,98], 100) // -1
 * 
 * O(log n) time complexity
 * O(log n) typically applies to algorithms that split n in half
 */
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.ceil((left + right) / 2);

  /**
   * We use moving pointers to avoid mutating the original
   * arr.
   * 1. check compare middle val with arr[middle]
   * 2. slice up arr depending on comparison via pointers
   */
  while (left < right) {
    if (val > arr[middle]) {
      left = middle;
      middle = Math.ceil((left + right) / 2);

    } else if (val < arr[middle]) {
      right = middle;
      middle = Math.ceil((left + right) / 2);

    } else if (val === arr[middle]) {
      return middle;
    }
  }
  return -1;
}

/**
 * illustration of binary search (Math.ceil):
 * [5,6,10,13,18,30,37,40,44,64,79,84,95,98], 95
 *  L                   M                 R
 *                      L        M        R
 *                               L     M  R (returns)
 */