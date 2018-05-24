// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// working
function pyramid(n) {
  if (n === 1) {
    console.log('#')
  }

  let colCount = (2 * n) - 1;
  //console.log('colCount: ' + colCount)

  if (n > 1) {
    let spaceCount
    for (let i = 0; i < n; i++) {
      str = ''
      spaceCount =  colCount - (1 + (i * 2))
      //console.log('spaceCount: ' + spaceCount)
      for (let j = 0; j < colCount; j++) {
        if (spaceCount > 0) {
          let mid = Math.floor(colCount / 2)
          //console.log('mid: ' + mid)
          //console.log('mid minus spaceCount/2: ' + (mid - (spaceCount / 2)).toString())
          if (i === 0 && j === mid) {
            str += '#';
          } else if (i > 0 && j > (mid - (1 + (i * 2))/ 2) && j < (mid + (1 + (i * 2))/ 2)) {
            str += '#';         
          } else {
            str += ' ';
          }
        }
        if (spaceCount === 0) {
          str += '#';
        }
      }
      console.log(str)
      spaceCount -= 2;

    }
  }

}




// function pyramid(n) {
//   if (n === 1) {
//     console.log('#')
//   }

//   let colCount = (2 * n) - 1;
//   //console.log('colCount: ' + colCount)

//   if (n > 1) {
//     let spaceCount
//     for (let i = 0; i < n; i++) {
//       str = ''
//       spaceCount =  colCount - (1 + (i * 2))
//       //console.log('spaceCount: ' + spaceCount)
//       for (let j = 0; j < colCount; j++) {
//         if (spaceCount > 0) {
//           let mid = Math.floor(colCount / 2)
//           //console.log('mid: ' + mid)
//           //console.log('mid minus spaceCount/2: ' + (mid - (spaceCount / 2)).toString())
//           if (j === mid) {
//             str += '#'
//           } //else if (j > mid - ((1 + (i * 2)) / 2) || j < mid + ((1 + (i * 2)) / 2)) {
//             //str += '#'
//           //} 
//           else {
//             str += ' '
//           }
//           // if (j <= mid - spaceCount / 2) {
//           //   str += ' '
//           // } else if (j >= n - 1 - spaceCount / 2) {
//           //   str += ' '
//           // } else {
//           //   str += '#'
//           // }
//         } else {
//           str += '#'
//         }
//       }
//       console.log(str)
//       spaceCount -= 2

//     }
//   }

// }

module.exports = pyramid;
