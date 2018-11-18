// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

}

function selectionSort(arr) {

}

function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	}

	// simple case is [1, 2]
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	// version before watching the solution video
	let counterLeft = 0;
	let counterRight = 0;
	let mergedAr = [];

	// test this logic
	while (counterLeft < left.length && counterRight < right.length) {
		if (left[counterLeft] <= right[counterRight]) {
			mergedAr.push(left[counterLeft]);
			counterLeft += 1;
		} else {
			mergedAr.push(right[counterRight]);
			counterRight += 1;
		}
	}
	// todo, see if there is a better way to do this and be ale to explain why needed
	if (counterLeft < left.length) {
		mergedAr = mergedAr.concat(left.slice(counterLeft))
	}
	if (counterRight < right.length) {
		mergedAr = mergedAr.concat(right.slice(counterRight))
	}
	//console.log('mergedAr', mergedAr)
	return mergedAr;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
