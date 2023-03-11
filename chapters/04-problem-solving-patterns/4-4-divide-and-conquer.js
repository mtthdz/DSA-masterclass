/**
 * Chapter 4.4 - Divide and Conquer
 *
 * Involves dividing a dataset into smaller chunks and then
 * repeating a process with a subset of data. It can tremendously
 * decrease time complexity.
 * 
 * Example 4.4A
 * Given a sorted array of integrers, write a function called
 * search, that accepts a value and returns the index where the
 * value passed to the function is located. If the value is not
 * found, return -1
 * 
 * search([1,2,3,4,5,6], 4)  // 3
 * search([1,2,3,4,5,6], 6)  // 5
 * search([1,2,3,4,5,6], 11) // -1
 */

/**
 * Naive solution, O(n)
 * 
 * Also known as linear search
 */
function searchNaive(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

/**
 * Divide and Conquer, O(Log n)
 * 
 * Also known as binary search
 */
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}