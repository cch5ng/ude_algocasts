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
	constructor(head=null) {
		this.head = head;
	}

	insertFirst(data) {
		let n = new Node(data);
		if (this.head) {
			n.next = this.head;
		}

		this.head = n;
	}

	size() {
		let count = 0;
		let curNode;
		if (this.head) {
			curNode = this.head;
			count += 1;
		} else {
			return 0;
		}

		while (curNode.next) {
			curNode = curNode.next;
			count += 1;
		}

		return count;
	}
}

module.exports = { Node, LinkedList };
