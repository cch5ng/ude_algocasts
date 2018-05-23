// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// instructor suggested using array.sort()
// runtime would be n log n (due to sort method)
function anagrams(str1, str2) {
  let clean1 = str1.replace(/[^\w]/g).toLowerCase()
  let clean2 = str2.replace(/[^\w]/g).toLowerCase()

  let ar1 = clean1.split('');
  ar1.sort();
  let ar2 = clean2.split('');
  ar2.sort();

  return ar1.join('') === ar2.join('');
}




// runtime would be about len str1 + len str2
// function getCharCount(str) {
//   let charCount = {};

//   for (let ch of str) {

//     // instructor suggested
//     charCount[ch] = charCount[ch] + 1 || 1;

//     // if (charCount[ch]) {
//     //   charCount[ch] += 1;
//     // } else {
//     //   charCount[ch] = 1;
//     // }
//   }

//   return charCount;
// }

// function deepEquals(objA, objB) {
//   let result = true;

//   for (let k in objA) {
// // instructor suggested
//     if (objA[k] !== objB[k]) {
//       return false;
//     }

// //    result = result && (objA[k] === objB[k]);
//   }

//   return result;
// }

// function anagrams(stringA, stringB) {
//   // cleanup word.replace(/[^\w]/g).toLowerCase()

//   let objA = {};
//   let objB = {};
//   let cleanA = stringA.replace(/[^\w]/g).toLowerCase();
//   let cleanB = stringB.replace(/[^\w]/g).toLowerCase();

//   objA = getCharCount(cleanA);
//   objB = getCharCount(cleanB);

//   // instructor suggested
//   if (Object.keys(objA).length !== Object.keys(objB).length) {
//     return false;
//   }

//   return deepEquals(objA, objB);

// }



module.exports = anagrams;
