// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack() // this should always be the reverse of stack1?
  }

  add(val) {
    this.stack1.push(val)
  }

  remove() {
    this.stack2.data = []
    while(this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }

    let result = this.stack2.pop()

    // instructor suggestion; need to move itms from stack 2 back into stack1
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }

    return result
  }

  peek() {
    this.stack2.data = []
    while(this.stack1.peek()) {
      this.stack2.push(this.stack1.pop())
    }

    let result = this.stack2.peek()

    // instructor suggestion; need to move itms from stack 2 back into stack1
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop())
    }

    return result
  }

}

module.exports = Queue;
