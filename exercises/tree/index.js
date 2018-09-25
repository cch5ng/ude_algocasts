// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    let n = new Node(data)
    this.children.push(n)
  }

  // what if there are multiple nodes with same value
  remove(data) {
    let idxToRemove;
    this.children.forEach((child, idx) => {
      if (child.data === data) {
        idxToRemove = idx;
      }
    })
    this.children.splice(idxToRemove, 1);
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    let nodeAr = []
    nodeAr.push(this.root)

    while(nodeAr.length) {
      let curNode = nodeAr.shift();
      curNode.children.forEach(child => {
        nodeAr.push(child)
      })
      fn(curNode)
    }

    //do something that iterates over each node in tree
    //fn(node)
  }

  traverseDF(fn) {
    let nodeAr = []
    nodeAr.push(this.root)

    while(nodeAr.length) {
      let curNode = nodeAr.shift();
      nodeAr = curNode.children.concat(nodeAr)
      fn(curNode)
    }
  }
}

module.exports = { Tree, Node };
