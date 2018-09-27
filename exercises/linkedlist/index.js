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
    while (curNode.next) {
      curNode = curNode.next;
    }
    return curNode;
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (this.head.next) {
      this.head = this.head.next      
    } else if (!this.head.next) {
      this.clear()
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
    let previousLast = this.getLast()
    let node = new Node(data)
    previousLast.next = node
  }

  getAt(idx) {
    if (idx > this.size() - 1) {
      return null
    }
    if (idx === 0) {
      return this.head
    } else {
      let counter = 1
      let curNode = this.head.next

      if (idx === 1) {
        return curNode
      } 
      while (counter <= idx) {
        counter += 1
        curNode = curNode.next
      }
      return curNode
    }
  }

}

module.exports = { Node, LinkedList };
