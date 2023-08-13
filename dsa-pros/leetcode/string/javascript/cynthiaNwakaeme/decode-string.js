const decodeString = s => {
	const arr = [];

	for (const char of s) {
		if (char !== ']') {
			arr.push(char);
			continue;
		}

		let currChar = arr.pop();

		let decoded = '';
		while (currChar !== '[') {
			decoded = currChar.concat(decoded);
			currChar = arr.pop();
		}

		let num = '';
		currChar = arr.pop();

		while (!Number.isNaN(Number(currChar))) {
			num = currChar.concat(num);
			currChar = arr.pop();
		}

		arr.push(currChar);
		arr.push(decoded.repeat(Number(num)));
	}

	return arr.join('');
}

console.log(decodeString("3[a]2[bc]"));