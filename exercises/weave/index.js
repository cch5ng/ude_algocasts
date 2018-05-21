// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  let q3 = new Queue();

  // instructor suggested
  while(sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q3.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q3.add(sourceTwo.remove());
    }
  }

  // my redundant way
  // while(sourceOne.peek() && sourceTwo.peek()) {
  //   // remove item from sourceOne
  //   let rem1 = sourceOne.remove()
  //   // add removed to q3
  //   q3.add(rem1)
  //   // remove item from sourceTwo
  //   let rem2 = sourceTwo.remove()
  //   // add removed to q3
  //   q3.add(rem2)
  // }

  // if (!sourceOne.peek) {
  //   while (sourceTwo.peek()) {
  //     let rem2 = sourceTwo.remove()
  //     // add removed to q3
  //     q3.add(rem2)
  //   }
  // }

  // if (!sourceTwo.peek) {
  //   while (sourceOne.peek()) {
  //     let rem1 = sourceOne.remove()
  //     // add removed to q3
  //     q3.add(rem1)
  //   }
  // }

  return q3;
}

module.exports = weave;
