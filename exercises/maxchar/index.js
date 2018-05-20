// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
want obj or map like {<ch>: <num_occurence>}
want obj.values (get max)
return matching key to max
*/

function maxChar(str) {
  let charCountMap = {};
  let max = 0;
  let maxChar = '';

  for (let ch of str) {
    charCountMap[ch] = charCountMap[ch] + 1 || 1
  }

  for (let ch in charCountMap) {
    if (charCountMap[ch] > max) {
      max = charCountMap[ch];
      maxChar = ch;
    }
  }

  return maxChar;
}


// function maxChar(str) {
//   let charCountMap = {};

//   for (let ch of str) {
//     charCountMap[ch] = charCountMap[ch] + 1 || 1

//     // if (charCountMap[ch]) {
//     //   charCountMap[ch] += 1;
//     // } else {
//     //   charCountMap[ch] = 1;
//     // }
//   }

//   let charsAr = Object.keys(charCountMap);

//   charsAr.sort(function(a, b) {
//     return charCountMap[b] - charCountMap[a];
//   })

//   return charsAr[0];
// }

module.exports = maxChar;
