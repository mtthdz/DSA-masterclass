/**
 * Chapter 04 - Problem Solving Patterns
 * 
 * Frequency Counter Pattern
 * Write a fn that accepts two arrays, which should
 * return true if every value in the array has its 
 * corresponding values squared in the second array.
 * The frequency of values must be the same (no shared)
 */
 same([1, 2, 3], [4, 1, 9]) // true
 same([1, 2, 3], [1, 9]) // false
 same([1, 2, 1], [4, 4, 1]) // false

// Naive solution
// time complexity of O(n^2)
function same_naive(arr1, arr2) {
    // ensure arr1 and arr2 are same length
    if(arr1.length !== arr2.length) {
        return false;
    }

    // foreach arr1, square and find in arr2
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }

        // remove value (frequency of values check)
        arr2.splice(correctIndex, 1)
    }
    return true
}

// Frequency Counter Pattern
// time complexity of O(n)
// two loops is better than two nested loops
function same_fcp(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // looking for how many times each value occurs
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for(let val of arr2) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let key in frequencyCounter1) {
        // does the squared value from fc1 exist as a key in fc2?
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        // frequency of values check
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
