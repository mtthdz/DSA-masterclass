/**
 * Chapter 7.3 - Insertion Sort
 * 
 * Builds up the sort by gradually creating a larger
 * left half which is always sorted
 * 
 * Example:
 * [ 5, 3, 4, 1, 2 ] => 3, [5]
 * [ 3, 5, 4, 1, 2 ] => 4, [3, 5]
 * [ 3, 4, 5, 1, 2 ] => 1, [3, 4, 5]
 * [ 1, 3, 4, 5, 2 ] => 2, [1, 3, 4, 5]
 * [ 1, 2, 3, 4, 5 ]
 * 
 * 
 * Insertion Sort, Pseudocode
 * O(n^2) time complexity
 * 
 * 
 * -> pick the second element in the array
 * -> compare the second element with the one before, swap if needed
 * -> continue to next element if it is in correct order, iterate
 *    through the sorted portion (left side) to place elemt in correct place
 * -> repeat until the array is sorted
 * 
 * Notes:
 * -> originally, line 36 was just 'arr[j] = currentVal' which is out
 *    of scope of the j loop. We can assign an index that j keeps overriding, 
 *    because the j loop will stop when it has found the index where currentVal
 *    should be placed.
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let replaceIndex = i;

    for (let j = (i - 1); j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
      replaceIndex = j;
    }
    arr[replaceIndex] = currentVal;
    // console.log(arr);
  }

  return arr;
}
/**
 * visual explanation
 * 
 * start at 1:
 * [2, 4, 9, 76, 1]
 * [2, 4, 9, 76, 76] 1 < 76, move 76
 * [2, 4, 9, 9, 76]  1 < 9, move 9
 * [2, 4, 4, 9, 76]  1 < 4, move 4
 * [2, 2, 4, 9, 76]  1 < 2, move 2
 * [1, 2, 4, 9, 76]  end of array, 1
 */

insertionSort([2, 1, 9, 76, 4]);
