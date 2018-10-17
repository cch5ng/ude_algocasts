// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    let n
    let curNode = this
    // no left and data < cur data
    if (!this.left && data < curNode.data) {
      n = new Node(data)
      this.left = n
    }
    // no right and data > cur data
    if (!this.right && data > curNode.data) {
      n = new Node(data)
      this.right = n
    }
    //???not sure here
    // has left and data < cur data
    if (this.left && data < curNode.data) {
      curNode = this.left
      curNode.insert(data)
    }
    // has right and data > cur data
    if (this.right && data > curNode.data) {
      curNode = this.right
      curNode.insert(data)
    }
  }

  // something is wrong here
  contains(data) {
    // if tree contains node with data === data, return that node
    // else return null
    let curNode = this
    if (curNode.data === data) {
      return curNode
    }
    // no left and data < cur data
    else if (!this.left && data < curNode.data) {
      return null
    }
    // no right and data > cur data
    else if (!this.right && data > curNode.data) {
      return null
    }
    //???not sure here
    // has left and data < cur data
    else if (this.left && data <= curNode.data) {
      curNode = this.left

      return curNode.contains(data)
    }
    // has right and data > cur data
    else if (this.right && data >= curNode.data) {
      curNode = this.right

      return curNode.contains(data)
    } else {
      return null 
    }
  }

  print() {
    let nodeList = [this]
    while (nodeList.length) {
      let curNode = nodeList.shift()
      console.log('curNode val', curNode.value)
      let subList = []
      if (curNode.left) {
        subList.push(curNode.left)
      }
      if (curNode.right) {
        subList.push(curNode.right)
      }
      nodeList.concat(subList)
    }
  }

}

module.exports = Node;
