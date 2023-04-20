/**
 * Chapter 6.3 - Naive String Search
 * 
 * Suppose you want to count the number of times a smaller 
 * string appears in a longer string
 * A straightforward approach involves checking pairs of
 * characters individually
 * 
 * Write a fn that:
 * Loops over the longer string
 * Loops over the shorter string
 * If a match is found, increment
 * return increments
 * 
 * naiveSearch("lorie loled", "lol") // 2
 */
function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; i < short.length; j++) {
      if(short[j] !== long[i+j]) break;
      if(j === short.length - 1) count++;
    }
  }
  return count;
}