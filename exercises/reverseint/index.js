// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let numStr = n
                .toString()
                .split('')
                .reverse()
                .join('');

  return parseInt(numStr, 10) * Math.sign(n);
}

// function reverseInt(n) {
//   // using ar.split() and ar.join()
//   // using ar.reverse()

//   if (n === 0) {
//     return n;
//   }

//   // num => str
//   // str => ar
//   // reverse ar
//   // join ar
//   // str => num
//   // handle neg
//   // handle negative
//   let msign = Math.sign(n);

//   if (msign === -1) {
//     n *= -1
//   }
//   let numStr = n.toString();
//   if (numStr.length === 1) {
//     return n
//   }
//   let numStrAr = numStr.split('');
//   numStrAr.reverse();

//   let resultNumStr = numStrAr.join('');

//   let resultNum = parseInt(resultNumStr, 10);
//   return resultNum * msign;
// }


// function reverseInt(n) {
//   // convert to string? reverse?
//   // handle ends with 0's
//   // handle negative case

//   if (n === 0) {
//     return n;
//   }
//   let numStr = n.toString();
//   let resultNumStr = '';

//   if (numStr.length === 1) {
//     return n
//   }

//   // handle negative
//   let msign = Math.sign(n);

//   for (let i = numStr.length - 1; i >= 0; i--) {
//     if (numStr[i] !== NaN) {
//       resultNumStr = resultNumStr + numStr[i];
//     }
//   }
//   let resultNum = parseInt(resultNumStr, 10);
//   return resultNum * msign;
// }

module.exports = reverseInt;
