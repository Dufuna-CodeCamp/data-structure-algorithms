/**
 * @param {string} str
 * @return {number}
 */
const optimalPartition = str => {
	if(str.length === 0) return 0;

	let count = 1, arr = [];

	for (let char of str) {
		if (!arr.includes(char)) arr.push(char);
		else {
			arr.splice(0, str.length);
			console.log(arr)
			count++;
		}
	}
	return count;
}

console.log(optimalPartition('abcabb'))