// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((accum, cur) => cur + accum, '');

  // return str.split('').reduce((accum, cur) => {
  //   return cur + accum;
  // }, '');
}


// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

/*
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');

  //let ar = str.split('');
  //ar.reverse();

  //return ar.join('');  
}
*/

/*
function reverse(str) {
  let newStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}
*/

module.exports = reverse;
