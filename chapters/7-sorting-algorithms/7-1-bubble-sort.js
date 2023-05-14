/**
 * Chapter 7.1 - Bubble Sort
 * 
 * In JS, the built-in sort method accepts an optional
 * comparator fn
 * We can use this comparator to tell JS how to sort
 * The comparator looks at pairs (a, b) and determines
 * (asc) sort order based on the return value
 * For example, it'll subtract a - b:
 * - if it returns negative, a comes before b
 * - if it returns positive, b comes before a
 * 
 * Bubble sort is not the most optimal algorithm but essential
 * For each iteration, it'll start from the beginning and swap 
 * lesser and greater values.
 * The main behaviour is to swap values so that the largest values
 * 'bubble' to the top
 * Because it prioritizes moving largest values to the end of the
 * array, it'll keep iterating to push the smallest values to the
 * beginning.
 * 
 * Example: first iteration
 * [ 5, 3, 4, 1, 2 ]
 * [ 3, 5, 4, 1, 2 ] => 3, 5
 * [ 3, 4, 5, 1, 2 ] => 4, 5
 * [ 3, 4, 1, 5, 2 ] => 1, 5
 * [ 3, 4, 1, 2, 5 ] => 2, 5
 *
 */