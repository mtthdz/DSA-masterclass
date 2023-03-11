/**
 * Chapter 4.2 - Multiple Pointers
 * 
 * Creating pointers or values that correspond to an index or
 * position and move towards the beginning, end, or middle based
 * on a certain condition
 * 
 * Example 4.2A
 * Write a function called SumZero which accepts a sorted array
 * of integers. The function should find the first pair where the 
 * sum is 0. Return an array that includes both values that sum to
 * zero or undefined if a pair does not exist.
 * Note: this only works for sorted arrays
 * 
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3])         // undefined
 * sumZero([1,2,3])            // undefined
 */

// Naive Solution, O(n^2)
function sumZeroNaive(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

/**
 * Multiple Pointers, O(n)
 * 
 * Note: we don't need to explicity state if (sum < 0),
 * it's present for quick reference.
 *
 */
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else if (sum < 0) {
            left++;
        }
    }
}

/**
 * Example 4.2B
 * Implement a function called countUniqueVlaues,
 * which accepts a sorted array, and counts the unique
 * values in the array. There can be negative numbers, 
 * but it'll always be sorted.
 * 
 * countUniqueValues([1,1,1,1,1,2])              // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([])                         // 0
 * countUniqueValues([-2,-1,-1,0,1])             // 4
 * 
 * @param {number}   arr
 * @returns {number} count
 */
function countUniqueValues(arr) {
  /**
   * we check to see if pointer A matches B;
   * if they don't, we move pointer A to the right,
   * and assign pointer A to pointer B's value.
   *
   * Once pointer B reaches the end of the array,
   * pointer A will be set at the last unique number.
   * Coincidentally, pointer A's value denotes the number
   * of unique values (see example below)
   * 
   * Starting position:
   *  i
   * [1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 6, 7]
   *     j
   * 
   * 
   * By the end of the loop:
   *                    i
   * [1, 2, 3, 4, 5, 6, 7, 6, 6, 7]
   *                             j
   */
  let left = 0

  if (arr.length === 0) return 0;
  for (let right = 1; right < arr.length; right++) {
    if (arr[left] !== arr[right]) {
      left ++;
      arr[left] = arr[right];
    }
  }

  return left + 1;
}
