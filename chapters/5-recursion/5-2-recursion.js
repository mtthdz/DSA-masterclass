/**
 * Chapter 5.2 - Recursion cont'd
 * 
 * Common pitfalls include:
 * 1. having no base case
 * 2. not returning during all use cases
 * 3. creating stack overflow
 * 
 * Helper method
 * A helper method recursive fn is a regular fn with a
 * recursive fn within it
 * A use case would be not needing to declare an empty array
 * outside of a function that fills the array
 * 
 * collectOddValues([1,2,3,4,5,6,7,8,9]) // [1,3,5,7,9]
 */
function collectOddValues(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice[1]);
  }

  helper(arr)

  return result;
}
