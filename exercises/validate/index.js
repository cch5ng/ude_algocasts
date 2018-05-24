// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function nodeLessThanList(val, valuesList) {
  for (let n of valuesList) {
    if (val > n) {
      return false;
    }
  }
  return true;
}


// function nodeGreaterThanList(val, valuesList) {
//   for (let n of valuesList) {
//     if (val < n) {
//       return false;
//     }
//   }
//   return true;
// }

// instructor suggested (his final solution)
function validate(node, min = null, max = null) {

  if (max !== null && node.data > max) {
    return false
  }
  if (min !== null && node.data < min) {
    return false
  }
  // this logic covers the case where want to compare root node to left child
  if (node.left && !validate(node.left, min, node.data)) {
    return false
  }
  // this logic handles case where want to compare root node to right child
  if (node.right && !validate(node.right, node.data, max)) {
    return validate(node.right, node.data, max)
  }

  return true

}

// instructor suggested
// this version works but the instructor solution is even more succinct
// function validate(node, min = null, max = null) {
//   if (max !== null && node.data > max) {
//     return false
//   }
//   if (min !== null && node.data < min) {
//     return false
//   }
//   if (node.left !== null && node.left.data > node.data) {
//     return false
//   }
//   if (node.right !== null && node.right.data < node.data) {
//     return false
//   }
//   if (node.left !== null && node.left.data < node.data) {
//     return validate(node.left, min, node.data)
//   }
//   if (node.right !== null && node.right.data > node.data) {
//     return validate(node.right, node.data, max)
//   }

//   return true

// }


// instructor suggested
// function validate(node, min = null, max = null) {
//   let result = true;
//   if ((node.left && node.left.value > node.value) || (node.right && node.right.value < node.value)) {
//     return false
//   }
//   if (min) {
//     result = result && node.value > min;
//   }
//   if (max) {
//     result = result && node.value < max;
//   }
//   if (node.left) {
//     result = result && validate(node.left, min, node.value)
//   }
//   if (node.right) {
//     result = result && validate(node.right, node.value, max)
//   }

//   return result


// }

// function validate(node, min = null, max = null) {
//   // iterate down left side
//   // track a list of parents
//   // each child node should be less than list of parents
//   let parentList = []
//   let curNode = node
//   let nextLeft = curNode.left
//   let isValidLeft = true

//   while (nextLeft) {
//     parentList.push(curNode.value)
//     isValidLeft = isValidLeft && nodeLessThanList(nextLeft.value, parentList)
//     curNode = nextLeft;
//     nextLeft = curNode.left;
//   }

//   parentList = []
//   curNode = node
//   let nextRight = curNode.right
//   let isValidRight = true

//   while (nextRight) {
//     parentList.push(curNode.value)
//     isValidRight = isValidRight && nodeGreaterThanList(nextRight.value, parentList)
//     curNode = nextRight;
//     nextRight = curNode.right;
//   }


//   return isValidLeft && isValidRight

// }

module.exports = validate;
