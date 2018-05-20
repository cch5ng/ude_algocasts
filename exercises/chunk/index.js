// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// instructor solution (array.slice() and while loop)
function chunk(array, size) {
  let chunked = [];
  let idx = 0;

  while (idx < array.length) {
    // define cur slice
    chunked.push(array.slice(idx, idx + size));
    idx += size;
  }

  return chunked;
}


// instructor solution (using array.slice())
// function chunk(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }

//   let chunked = [];
//   for (let i = 0; i < array.length; i += size) {
//     let innerAr;
//     if (array.length > i + size) {
//       innerAr = array.slice(i, i + size);
//     } else {
//       innerAr = array.slice(i);
//     }
//     chunked.push(innerAr);
//   }

//   return chunked;
// }


// instructor solution
// function chunk(array, size) {
//   let chunked = [];

//   for (let num of array) {
//     let lastChunk = chunked[chunked.length - 1];

//     if (chunked.length === 0 || lastChunk.length === size) {
//       chunked.push([num]);
//     } else {
//       let lastChunk = chunked.pop();
//       lastChunk.push(num);
//       chunked.push(lastChunk);
//     }
//   }

//   return chunked;
// }

//chunk([1, 2, 3], 3);


// function chunk(array, size) {
//   if (array.length <= size) {
//     return [array];
//   }

//   let outterAr = [];
//   if (array.length % size === 0) {
//     for (let i = 0; i < array.length; i += size) {
//       let innerAr = [];
//       for (let j = i; j < i + size; j++) {
//         innerAr.push(array[j]);
//       }
//       outterAr.push(innerAr);
//     }
//   }

//   if (array.length % size !== 0) {
//     for (let i = 0; i < array.length; i += size) {
//       let innerAr = [];
//       for (let j = i; j < i + size; j++) {
//         if (array.length > j) {
//           innerAr.push(array[j]);
//         }
//       }
//       outterAr.push(innerAr);
//     }
//   }
//   return outterAr;
// }

module.exports = chunk;
