/**
 * Chapter 4.1: Frequency Counter Pattern
 * 
 * This pattern uses objects or sets to collect values/
 * frequencies of values. Often avoids the need for nested
 * loops or O(n^2) operations with arrays & strings.
 * 
 * Example 4.1.A
 * Write a fn that accepts two arrays, which should
 * return true if every value in the array has its 
 * corresponding values squared in the second array.
 * The frequency of values must be the same (no shared)
 * 
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1, 2, 3], [1, 9])    // false
 * same([1, 2, 1], [4, 4, 1]) // false
 */

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


/**
 * Example 4.1.B
 * time complexity of O(n)
 * Given two strings, write a function to determine if the second string is an
 * anagram of the first. An anagram is a word, phrase, or name formed by
 * rearranging the letters of another, such as cinema, formed from iceman.
 * 
 * anagram('', '')               // true
 * anagram('aaz', 'zza')         // false
 * anagram('anagram', 'nagaram') // true
 * anagram('rat', 'car')         // false
 * anagram('awesome', 'awesom')  //false
 * 
 * @param first  [arr]
 * @param second [arr]
 * @return       [boolean]
 */
function validAnagram(first, second) {
    // anagram must be same length (all the same letters used)
    if(first.length !== second.length) {
        return false;
    }

    const lookup = {};

    // if letter exists in lookup, add one. else, set to one
    for(let i = 0; i < first.length; i++) {
        let letter = first[i];
        lookup[letter] ? lookup[letter] ++ : lookup[letter] = 1;
    }

    // can't find letter or letter is zero, then it's not an anagram
    // remember, undefined and 0 are both falsey
    for(let i = 0; i < second.length; i++) {
        let letter = second[i];
        
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] --;
        }
    }

    return true;
}