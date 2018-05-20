// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   traverseBF() {

//   }


// }

function levelWidth(root) {
  let rowElements = [1]

  let cur = [root]

  while (cur.length) {
    let children = []
    cur.forEach(n => {
      children.push(...n.children)
    })
    let count = children.length
    if (count) {
      rowElements.push(count)
    }
    cur = children
  }

  return rowElements
}

module.exports = levelWidth;
