/**
 * @param {string} str
 * @return {boolean}
 */

const palindromeII = str => {
	if(str.length < 1 || str.length > 100000) return false;

	let newString, reverseString;
	for(let i = 0; i <= str.length; i++) {
		newString = `${str.substring(0, i)}${str.substring(i + 1, str.length)}`;
		newString = newString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

		reverseString = newString.split('').reverse().join('');
		if(newString === reverseString) return true;
	}
	return false;
}

console.log(palindromeII('abc'));