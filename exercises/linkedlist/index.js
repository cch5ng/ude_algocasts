// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {

  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    let node = new Node(data);
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }

  size() {
    let counter = 0;

    if (!this.head) {
      return counter;
    }
    let curNode = this.head;
    counter += 1;

    while(curNode.next) {
      counter += 1;
      curNode = curNode.next
    }

    return counter;
  }

  getFirst() {
    if (this.head) {
      return this.head;
    } else {
      return null
    }
  }

  getLast() {
    let curNode = this.head

    if (!curNode.next) {
      return curNode
    }
    while (curNode.next) {
      curNode = curNode.next;
    }
    return curNode;
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (this.head) {
      if (this.head.next) {
        this.head = this.head.next      
      } else if (!this.head.next) {
        this.clear()
      }      
    }
  }

  removeLast() {
    if (this.head) {
      let prevNode = this.head
      let curNode = this.head

      if (this.head.next) {
        curNode = this.head.next
        while(curNode.next) {
          prevNode = curNode
          curNode = curNode.next
        }
        prevNode.next = null
      } else {
        this.clear()
      }
    }
  }

  insertLast(data) {
    let node = new Node(data)

    if (!this.head) {
      this.head = node
    } else if (!this.head.next) {
      this.head.next = node
    } else if (this.head.next) {
      let previousLast = this.getLast()
      previousLast.next = node      
    }
  }

  getAt(idx) {
    if (!this.head) {
      return null
    }
    if (idx > this.size() - 1) {
      return null
    }
    if (idx === 0) {
      return this.head
    } else if (idx === 1 && this.head.next) {
      return this.head.next
    } else if (idx === this.size() - 1) {
      return this.getLast()
    } else {
      let counter = 2
      let curNode = this.head.next.next

      while (counter < idx) {
        counter += 1
        curNode = curNode.next
      }
      return curNode
    }
  }

  removeAt(idx) {
    if (idx === 0) {
      this.removeFirst()
    } else if (idx === this.size() - 1) {
      this.removeLast()
    } else {
      let prevNode = this.getAt(idx - 1)
      let nextNode = this.getAt(idx + 1)
      if (nextNode) {
        prevNode.next = nextNode
      }
    }
  }

  insertAt(data, idx) {
    if (idx === 0) {
      this.insertFirst(data)
    } else if (idx >= this.size() - 1) {
      this.insertLast(data)
    } else {
      let node = new Node(data)
      let prevNode = this.getAt(idx - 1)
      let nextNode = this.getAt(idx)

      prevNode.next = node
      node.next = nextNode
    }
  }



}

module.exports = { Node, LinkedList };
