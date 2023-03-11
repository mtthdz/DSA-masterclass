/**
 * Chapter 4.3 - Sliding Window
 * 
 * Example 4.3A
 * Write a function called maxSubarraySum which accepts
 * and array of intergers and a number n. The fn should
 * calculate the maximum sum of n consecutive elements in
 * the array.
 * 
 * maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
 * maxSubarraySum([1,2,5,2,8,1,5], 4) // 17
 * maxSubarraySum([4,2,1,6], 1)       // 6
 * maxSubarraySum([], 4)              // null
 */

/**
 * naive solution, O(n^2)
 * 
 * Notes
 * - we use -Infinity since our sums could be negative
 * - arr.length - num + 1 will stop the sliding window
 *   when the end of our window hits the end of the arr
 */
function maxSubarraySumNaive(arr, n) {
  if (n > arr.length) return null;

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) max = temp;
  }

  return max;
}

/**
 * Sliding window pattern, O(n)
 * 
 * Rather than sliding the window via loop and summing via
 * nested loop,
 * We move the window by subtracing the first value and adding
 * the next value to the right of the sum
 * 
 */
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  // calculate initial maxSum (could use reduce)
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
