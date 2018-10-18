// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

// given 2 sorted arrays, return one sorted array combining all elements
function merge(left, right) {
  let cLeft = 0
  let cRight = 0
  let mergedAr = []

  for (let i = cLeft + cRight; i < left.length + right.length; i++) {
    if (cLeft === left.length) {
      mergedAr = mergedAr.concat(right.slice(cRight))
    } else if (cRight === right.length) {
      mergedAr = mergedAr.concat(left.slice(cLeft))
    } else if (left[cLeft] < right[cRight]) {
      mergedAr.push(left[cLeft])
      cLeft += 1
    } else if (right[cRight] < left[cLeft]) {
      mergedAr.push(right[cRight])
      cRight += 1
    } else if (left[cLeft] === right[cRight]) {
      mergedAr.push(left[cLeft])
      cLeft += 1
      mergedAr.push(right[cRight])
      cRight += 1
    } 
  }

  // to handle case where arrays are different lengths
  return mergedAr

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
