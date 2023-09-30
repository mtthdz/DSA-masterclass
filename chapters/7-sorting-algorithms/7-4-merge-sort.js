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