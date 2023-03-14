/**
 * Chapter 5.1 - Recursion
 * 
 * Recursion is the act of calling a fn inside of itself
 * 
 * the call stack is a data structure that manages what happens
 * when fn's are invoked
 * Any time a fn is invoked, it is placed on the top of the
 * call stack (pushed)
 * When the fn returns/ends, the ccompiler will remove from
 * the call stack (pop)
 * When we write recursive fn's, we keep pushing new fn's
 * onto the call stack until a condition resolves
 * 
 * Two essential parts of a recursive fn:
 * 1. base case
 * 2. different input
 */
function countDown(num) {
  // base case
  if (num <= 0) {
    console.log('All done');
    return;
  }

  // iteration creates diff value on fn call
  console.log(num);
  num--;
  countDown(num);
}

/**
 * 
 * Fn will add all the numbers in a range
 * from 0 to num
 * 
 * sumRange(5) // 1 + 2 + 3 + 4 + 5 = 15
 * sumRange(3) // 1 + 2 + 3 = 6
 */
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
