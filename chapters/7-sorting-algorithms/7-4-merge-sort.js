/**
 * Chapter 7.4 - Merge Sort
 * 
 * A combination of splitting, merging, and sorting 
 * Exploits that arrays of 0 or 1 elements are always
 * sorted
 * Works by decomposing an array into smaller arrays of
 * 0 or 1 elements, then building up a newly sorted array
 * 
 * Example
 * [8, 3, 5, 4, 7, 6, 1, 2]
 * [8, 3, 5, 4]   [7, 6, 1, 2]  -> split
 * [8, 3] [5, 4]  [7, 6] [1, 2] -> split
 * [8][3] [5][4]  [7][6] [1][2] -> split
 * [3, 8] [4, 5]  [6, 7] [1, 2] -> sort, merge
 * [3, 4, 5, 8]   [1, 2, 6, 7]  -> sort, merge
 * [1, 2, 3, 4, 5, 6, 7, 8]     -> sort, merge
 */

/**
 * Merging Arrays
 * In order to implement merge sort, it's useful to first
 * implement a function responsible for merging two sorted
 * arrays.
 * Given two sorted arrays, this helper should create a new
 * array (which is also sorted) by combining both arrays
 * Should be O(n + m) time and O(n + m) space complexity
 * 
 * Pseudocode
 * -> create an empty array, take a look at the smallest values
 *    in each input array
 * -> while there are still values we haven't look at
 *    -> if first array[n] < second array[n] push first array[n]
 *    -> if first array[n] > second array[n] push second array[n]
 *    -> once array is done, push remaining values in other array
 */


/**
 * Visual explanation
 * [1, 10, 50] [2, 14, 99, 100] -> 1, 2   => [1]
 * [10, 50] [2, 14, 99, 100]    -> 10, 2  => [1, 2]
 * [10, 50] [14, 99, 100]       -> 10, 14 => [1, 2, 10]
 * etc.
 */
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // while there's still data in both arrays, iterate
  // else also covers edge case of if arr1[i] === arr2[j]
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // when arr1.length !== arr2.length
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results;
}

/**
 * MergeSort Pseudocode
 * 
 * 1. break up array into halves into single indices via .slice
 * 2. merge arrays back
 */
function mergeSort(arr) {
  // base case
  if (arr.length <= 1) return arr;

  // recursive case
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 72, 1, 9])