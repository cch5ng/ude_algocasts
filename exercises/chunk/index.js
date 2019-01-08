// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
	let resAr = [];
	let innerAr = [];

	if (size > array.length) {
		return [array];
	}

	for (let i = 0; i < array.length; i++) {
		if (innerAr.length === size) {
			resAr.push(innerAr);
			innerAr = [];
			innerAr.push(array[i]);
		} else {
			innerAr.push(array[i]);
		}
	}

	if (innerAr.length) {
		resAr.push(innerAr);
	}

	return resAr;
}

// function chunk(array, size) {
// 	if (size > array.length) {
// 		return [array];
// 	}

// 	let retAr = [];
// 	let innerAr = [];
// 	let counter = 1;

// 	for (let i = 0; i < array.length; i++) {
// 		if (i === 0) {
// 			innerAr.push(array[i]);
// 		} else if (Math.floor(i / size) < counter) {
// 			innerAr.push(array[i]);
// 		} else if ((i / size) === counter) {
// 			retAr.push(innerAr);
// 			counter += 1;
// 			innerAr = [];
// 			innerAr.push(array[i]);
// 		} else if (i === array.length) {
// 			console.log('gets here')
// 			retAr.push(innerAr);
// 		}
// 	}

// 	console.log('retAr', retAr);
// 	return retAr;

// }

module.exports = chunk;
