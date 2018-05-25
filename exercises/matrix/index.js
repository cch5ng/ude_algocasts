// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {


// }


function matrix(num) {
  let result = [];
  let numRow = num;
  let max = num * num

  let colStart = 0;
  let colEnd = numRow - 1;
  let rowStart = 0;
  let rowEnd = numRow - 1;

  let counter = 1;
  
  for (let i = 0; i < numRow; i++) {
    let innerRow = [];
    for (let j = 0; j < numRow; j++) {
      innerRow.push('');
    }
    result.push(innerRow);
  }
  
  // result:
  /*
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]
  */
  
  while (counter <= max) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = counter;
      counter += 1;
    }
    rowStart += 1;
    for (let j = rowStart; j <= rowEnd; j++) {
      result[j][colEnd] = counter;
      counter += 1;
    }
    colEnd -= 1;
    for (let k = colEnd; k >= colStart; k--) {
      result[rowEnd][k] = counter;
      counter += 1;
    }
    rowEnd -= 1;
    //console.log('rowEnd: ' + rowEnd);

    for (let m = rowEnd; m >= rowStart; m--) {
      result[m][colStart] = counter;
      counter += 1;
    }
    colStart += 1;
    //console.log('result: ' + result);

  }

  return result
}

//console.log('matrix(9): ' + matrix(9));





// function matrix(num) {
//   let result = [];
//   let numRow = Math.sqrt(num);

//   let colStart = 0;
//   let colEnd = numRow - 1;
//   let rowStart = 0;
//   let rowEnd = numRow - 1;

//   let counter = 1;
  
//   for (let i = 0; i < numRow; i++) {
//     let innerRow = [];
//     for (let j = 0; j < numRow; j++) {
//       innerRow.push('');
//     }
//     result.push(innerRow);
//   }
  
//   // result:
//   /*
//     [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ]
//   */
  
//   while (counter < num) {
//     for (let i = colStart; i <= colEnd; i++) {
//       result[rowStart][i] = counter;
//       counter += 1;
//     }
//     rowStart += 1;
//     for (let j = rowStart; j <= rowEnd; j++) {
//       result[j][colEnd] = counter;
//       counter += 1;
//     }
//     colEnd -= 1;
//     for (let k = colEnd; k >= colStart; k--) {
//       result[rowEnd][k] = counter;
//       counter += 1;
//     }
//     rowEnd -= 1;
//     console.log('rowEnd: ' + rowEnd);

//     for (let m = rowEnd; m >= rowStart; m--) {
//       result[m][colStart] = counter;
//       counter += 1;
//     }
//     colStart += 1;
//     console.log('result: ' + result);

//   }

//   //return result
// }

// console.log('matrix(9): ' + matrix(9));


// function matrix(num) {
//   let result = [];
//   let numRow = Math.sqrt(num);

//   let colStart = 0;
//   let colEnd = numRow - 1;
//   let rowStart = 0;
//   let rowEnd = numRow - 1;

//   let counter = 1;
  
//   for (let i = 0; i < numRow; i++) {
//     let innerRow = [];
//     for (let j = 0; j < numRow; j++) {
//       innerRow.push('');
//     }
//     result.push(innerRow);
//   }
  
//   // result:
//   /*
//     [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ]
//   */
  
//   while (counter <= num) {
//     for (let i = colStart; i <= colEnd; i++) {
//       result[rowStart][i] = counter;
//       counter += 1;
//     }
//     rowStart += 1;
//     for (let j = rowStart; j <= rowEnd; j++) {
//       result[j][colEnd] = counter;
//       counter += 1;
//     }
//     colEnd -= 1;
//     for (let k = colEnd; k > colStart; k--) {
//       result[rowEnd][k] = counter;
//       counter += 1;
//     }
//     rowEnd -= 1;
//     console.log('rowEnd: ' + rowEnd);

//     for (let m = rowEnd; m > rowStart; m--) {
//       result[m][colStart] = counter;
//       counter += 1;
//     }
//     colStart += 1;
//     console.log('result: ' + result);

//   }

//   //return result
// }

// console.log('matrix(9): ' + matrix(9));





// function matrix(num) {
//   let result = [];
//   let numRow = Math.sqrt(num);

//   let colStart = 0;
//   let colEnd = numRow;
//   let rowStart = 0;
//   let rowEnd = numRow;

//   let counter = 1;
  
//   for (let i = 0; i < numRow; i++) {
//     let innerRow = [];
//     for (let j = 0; j < numRow; j++) {
//       innerRow.push('');
//     }
//     result.push(innerRow);
//   }
  
//   // result:
//   /*
//     [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ]
//   */
  
//   while (counter <= num) {
//     for (let i = colStart; i < colEnd; i++) {
//       result[rowStart][i] = counter;
//       counter += 1;
//     }
//     rowStart += 1;
//     for (let j = rowStart; j < rowEnd; j++) {
//       console.log('rowStart: ' + rowStart)
//       console.log('colEnd: ' + colEnd)
//       result[j][colEnd - 1] = counter;
//       counter += 1;
//     }
//     console.log('result: ' + result);
//     colEnd -= 1;
//     for (let k = colEnd - 1; k > colStart; k--) {
//       result[rowEnd - 1][k] = counter;
//       counter += 1;
//     }
//     rowEnd -= 1;
//     for (let m = rowEnd - 1; m > rowStart; m--) {
//       result[m][colStart] = counter;
//       counter += 1;
//     }
//     colStart += 1;
//   }

//   //return result
// }

// console.log('matrix(9): ' + matrix(9));



// function matrix(num) {
//   let result = [];
//   let numRow = Math.sqrt(num);

//   let colStart = 0;
//   let colEnd = numRow;
//   let rowStart = 0;
//   let rowEnd = numRow;

//   let counter = 1;
  
//   for (let i = 0; i < numRow; i++) {
//     let innerRow = [];
//     for (let j = 0; j < numRow; j++) {
//       innerRow.push('');
//     }
//     result.push(innerRow);
//   }
  
//   // result:
//   /*
//     [
//       ['', '', ''],
//       ['', '', ''],
//       ['', '', '']
//     ]
//   */
  
//   while (counter <= num) {
//     for (let i = colStart; i < colEnd; i++) {
//       result[rowStart][i] = counter;
//       counter += 1;
//     }
//     rowStart += 1;
//     for (let i = rowStart; i < rowEnd; i++) {
//       result[i][colEnd] = counter;
//       counter += 1;
//     }
//     console.log('result: ' + result);
//     colEnd -= 1;
//     for (let i = colEnd; i > colStart; i--) {
//       result[rowEnd][i] = counter;
//       counter += 1;
//     }
//     rowEnd -= 1;
//     for (let i = rowEnd; i > rowStart; i--) {
//       result[i][colStart] = counter;
//       counter += 1;
//     }
//     colStart += 1;
//   }

//   return result
// }

// console.log('matrix(5): ' + matrix(5));


module.exports = matrix;
