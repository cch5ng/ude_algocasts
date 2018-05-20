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
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let n = new Node(data);
    // case root has left and right populated
    // case arrived at final left
    // case arrived at final right
    if (data < this.data) {
      // case node should be inserted to left
      if (!this.left) {
        this.left = n;
      } else {
        this.left.insert(data);
      }
    } else if (data > this.data) {
      // case node should be inserted to right
      if (!this.right) {
        this.right = n;
      } else {
        this.right.insert(data);
      }
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    } else if (data < this.data && this.left) {
      // instructor correction, had to add return before recursion
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    } 

    return null;
  }

}

module.exports = Node;
