/**
 * Chapter 01 - Big O
 * 
 * Numeric representation of an algorithm's performance.
 * The problem with timing algorithms is that not only will different 
 * machines record different times, the same machine will do the same.
 * 
 * Regardless of the number of operations, the number of operations in
 * a typical for-loop grows proportionally with n
 * 
 * O(1) = no matter what n is, it'll always be a constant number of 
 * operations
 * O(n) = linear; number of operations is bounded by a multiple of n
 * O(n^2) = quadratic; nested for-loop
 * 
 * 1. Arithmetic operations are constant
 * 2. Variable assignment is constant
 * 3. Accessing elements by index/key is constant
 * 4. In a loop, the complexity is the length of the loop * complexity
 * 
 * Auxiliary space complexity refers to the space required by the algorithm
 * not including space taken up by the inputs
 * Most primitives (booleans, numbers, undefined, null) are constant space
 * Strings require O(n) space where n = string.length
 * Reference types are also O(n) where n = array or object length
 * 
 * Logarithms are the inverse of exponential functions
 * i.e. log2(8) = 3 -> 2^3 = 8; what is 2's exponent to equate to 8
 * Logarithmic time complexity of O(log n) is very favourable
 * Sorting (and some searching) algorithms are O(log n)
 * Recursion is sometimes O(log n)
 * 
 * 
 */