// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    let n = new Node(data)
    if (this.head) {
      n.next = this.head
    }
    this.head = n
  }

  size() {
    let count = 0;
    let curNode = this.head;

    if (!curNode) {
      return 0;
    }
    if (curNode) {
      count += 1;
    }
    while (curNode.next) {
      curNode = curNode.next;
      count += 1;
    }

    return count;
  }

  getFirst() {
    if (this.head) {
      return this.head;
    }
  }

  getLast() {
    let curNode = this.head;

    if (!curNode) {
      return;
    }
    while (curNode.next) {
      curNode = curNode.next;
    }

    return curNode;
  }

  clear() {
    this.head = null;
  }


}

module.exports = { Node, LinkedList };
