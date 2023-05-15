/**
 * Chapter 7.2 - Selection Sort
 * 
 * Similar to bubble sort, but instead of placing largest
 * values into sorted position, it places smallest values
*
* Example: first iteration
* [ 5, 3, 4, 1, 2 ] => 5, 3
* [ 5, 3, 4, 1, 2 ] => 5, 4
* [ 5, 3, 4, 1, 2 ] => 5, 1
* [ 1, 3, 4, 5, 2 ] => 1 was smallest; swap 5 and 1
* 
 * Because we determine the smallest value through every
 * pass (where the arr gets smaller), we don't need a 
 * break logic check, unlike bubble sort
 * 
 * Selection Sort, Pseudocode
 * O(n^2) time complexity
 * 
 * -> store the first element as the smallest value
 * -> compare this item to the next array value until
 *    smallest value is found
 * -> if the new minimum is not the initial value (index),
 *    swap the two values
 * -> repeat until sorted
 *
 */
function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // swap
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);