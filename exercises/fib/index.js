// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// TODO check this logic
function memoize(fn) {
  let cache = {}
  // TODO review es6, ...args
  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }
    // TODO review apply() method
    let result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

// recursive solution
// this has pretty poor runtime; exponential run time (like 2**n)
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

let fib = memoize(slowFib)


// iterative solution; O(n) runtime
// function fib(n) {
//   let ar = [0, 1]
//   if (n < 2) {
//     return n;
//   }

//   for (let i = 0; i <= n; i++) {
//     if (i >= 2) {
//       let sum = ar[i-1] + ar[i-2];
//       ar.push(sum);
//     }
//   }

//   return ar[ar.length - 1];
// }

//fib(3);



module.exports = fib;
