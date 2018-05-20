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
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(c => c.data !== data);
  }
}

class Tree {

  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    let ar = []
    ar.push(this.root)

    while (ar.length) {
      let removed = ar.shift()
      if (removed.children.length) {
        ar.push(...removed.children)
        //ar = ar.concat(removed.children)
      }
      fn(removed)
    }
  }

  // approach BF
  // create ar = []
  // add root to ar
  // iterate
    // while itms in ar
    // remove first itm frm ar
    // get children of itm adn append to end of ar
    // run input functn on data of th item (delete item)


  traverseDF(fn) {
    let ar = []
    let checked = []
    ar.push(this.root)

    while (ar.length) {
      let removed = ar.shift()
      if (removed.children.length) {
        ar.unshift(...removed.children)
        // ar = removed.children.concat(ar)
      }
      fn(removed)
    }
  }

  // approach DF
  // create ar = []
  // add root to ar
  // iterate
    // while itms in ar
    // remove last itm frm ar
    // get children of itm adn add to beg of ar
    // run input functn on data of th item (delete item)

}

module.exports = { Tree, Node };
