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
		this.forward = new Stack();
		this.backward = new Stack();
	}

	add(val) {
		if (this.backward.data.length) {
			while (this.backward.data.length) {
				let el = this.backward.pop();
				this.forward.push(el);
			}
			this.forward.push(val)
		} else {
			this.forward.push(val);
		}

	}

	peek() {
		if (this.forward.data.length) {
			this.backward.data = [];
			while(this.forward.data.length) {
				let it = this.forward.pop();
				this.backward.push(it);
			}
			return this.backward.data[this.backward.data.length - 1];
		} else {
			return this.backward.data[this.backward.data.length - 1];
		}
	}

	remove() {
		if (this.forward.data.length) {
			this.backward.data = [];
			while(this.forward.data.length) {
				let it = this.forward.pop();
				this.backward.push(it);
			}
			return this.backward.pop();
		} else {
			return this.backward.pop();
		}
	}

}

module.exports = Queue;
