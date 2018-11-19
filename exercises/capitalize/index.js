// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// after watching video (seems more space efficient)
	// runtime complexity: O(n); where n is length of string
	// more space efficient; O(1)
	let capString = str[0].toUpperCase();
	for (let idx = 1; idx < str.length; idx++) {
		if (str[idx - 1] === ' ') {
			capString += str[idx].toUpperCase();
		} else {
			capString += str[idx];
		}
	}

	return capString;

	// before watching video
	// more time efficient
	// runtime complexity: O(n) where n is number of words in str
	// space complexity: O(n) where max space required is still based on number of words in upperAr
	/*
	const lowerAr = str.split(' ');
	const upperAr = lowerAr.map(word => {

		let upper = word.slice(0, 1).toUpperCase()
		if (word.length > 1) {
			upper += word.slice(1);
		}
		return upper;
	})
	return upperAr.join(' ');
	*/
}

module.exports = capitalize;
