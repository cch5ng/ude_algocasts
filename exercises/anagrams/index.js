// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// https://www.w3schools.com/charsets/ref_html_ascii.asp
// char codes A - Z; 65 - 90
// char codes a - z; 97 - 122
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

function anagrams(stringA, stringB) {
  let obj1 = {};
  let obj2 = {};

  let string1 = stringA.toLowerCase();
  let string2 = stringB.toLowerCase();

  obj1 = strToObj(string1)
  obj2 = strToObj(string2)

  return deepEquals(obj1, obj2)
}

function strToObj(str) {
  let obj = {};

  for (let i= 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122 && str.char !== ' ') {
      let char = str[i]
      if (obj[char]) {
        obj[char] += 1
      } else {
        obj[char] = 1
      }
    }
  }

  return obj
}

function deepEquals(obj1, obj2) {
  let keys1 = []
  let keys2 = []

  keys1 = Object.keys(obj1)
  keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i]
    if (obj1[key] !== obj2[key]) {
      return false
    }

  }

  return true
}

module.exports = anagrams;
