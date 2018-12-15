// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function updateLists (node, forwardList, backwardList) {
	forwardList.push(node);
	backwardList.unshift(node);	
}

function midpoint(list) {

	let slow = list.head || null;
	let fast = list.head || null;

	while(fast.next && fast.next.next) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;

	// let forwardList = [];
	// let backwardList = [];
	// let curNode;

	// if (!list.head) {
	// 	return 'empty list';
	// } else {
	// 	curNode = list.head;
	// 	updateLists(curNode, forwardList, backwardList);

	// 	while (curNode.next) {
	// 		curNode = curNode.next;
	// 		updateLists(curNode, forwardList, backwardList);
	// 	}
	// }

	// let idxf = 0;
	// let idxb = backwardList.length - 1;

	// while (idxf < idxb) {
	// 	idxf += 1;
	// 	idxb -= 1;
	// }

	// if (idxf === idxb) {
	// 	return forwardList[idxf];
	// } else {
	// 	return forwardList[idxf - 1];
	// }

}

module.exports = midpoint;
