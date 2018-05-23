// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// instructor suggested
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  //console.log('result: ' + result)
  return result;
}


// function capitalize(str) {
//   let ar = str.split(' ');
//   let arCap = ar.map(w => {
//     // instructor suggested
//     let str = w[0].toUpperCase() + w.slice(1)
//     return str;

//     // let str = ''
//     // for (let i = 0; i < w.length; i++) {
//     //   if (i === 0) {
//     //     str += w[i].toUpperCase();
//     //   } else {
//     //     str += w[i];
//     //   }
//     // }
//     // return str;
//   });

//   return arCap.join(' ');
// }

module.exports = capitalize;
