// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {

  constructor() {
    this.ar = []
  }

  add(it) {
    // not sure could you also use ar.push()
    this.ar.unshift(it)
  }

  remove() {
    // not sure could you also use ar.shift()
    return this.ar.pop()
  }
}

module.exports = Queue;
