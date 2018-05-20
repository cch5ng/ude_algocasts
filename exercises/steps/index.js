// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursion solution (instructor suggested)
// working but not sure this is totally right
function steps(n, row = 0, stair = '') {
  
  if (n === row) {
    return
  }

  // end of cur row (print and go to next row)
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }

  // not yet end of cur row
  // stair length is placeholder for col
  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  return steps(n, row, stair);
}



// recursion solution (instructor suggested)
// working but not sure this is totally right
// function steps(n, row = 0) {
  
//   if (n === row) {
//     return
//   }
  
//   // do something
//   let step = ''
//   for (let i = 0; i < n; i++) {
//     if (i <= row) {
//       step += '#'
//     } else {
//       step += ' '
//     }
//   }
//   console.log(step);
//   steps(n, row + 1)
// }

// recursion solution (instructor suggested)
// not working
// function steps(n) {
//   let step = ''
//   let count = 0

//   if (n === 1) {
//     step += "#"
//     //return step
//   } else {
//     step += " "
//     //return step
//   }



//   //if (count < n) {
//     step = steps(1) + steps(n - 1)
//   //  count += 1
//   //}
//   console.log(step)

// }

// recursion solution (instructor suggested)
// function steps(n) {
//   let step = ''
//   let count = 0

//   if (n === 1) {
//     step = "#"
//     //return step
//   } else {
//     step = " "
//     //return step
//   }



//   if (count < n) {
//     step = steps(1) + steps(n - 1)
//   }
//   console.log(step)

// }

// working solution (iterative)
// function steps(n) {

//   for (let i = 1; i <= n; i++) {
//     let step = ''
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         step += '#'
//       } else {
//         step += ' '
//       }
//     }
//     console.log(step)

//   }
// }

module.exports = steps;
