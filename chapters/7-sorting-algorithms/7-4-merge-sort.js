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
merge([1, 10, 50], [2, 14, 99, 100]);