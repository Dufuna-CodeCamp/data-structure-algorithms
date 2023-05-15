/*-------------------------------------------------------------------------
1. VALID PALINDROME II
Time complexity - O(n)                  Runtime - 303ms
Space complexity - O(1)                 Memory Usage - 64.8MB
-------------------------------------------------------------------------- */
const validPalindrome = function(s) {
    let middle = s.length / 2;
    for (let i = 0; i < middle; i++) {
        let j = s.length - i - 1
        if (s[i] !== s[j]) {
            return isPalindrome(remove(s, i)) || isPalindrome(remove(s, j))
        }
    }
    return true
};

const remove = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');

/*-------------------------------------------------------------------------
2. OPTIMAL PARTITION OF STRING
Time complexity -                       Runtime - 120ms
Space complexity -                      Memory Usage - 49.6MB
-------------------------------------------------------------------------- */
var partitionString = function (s) {
    let map = new Map();
    let substringCount = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!map.has(char)) {
            map.set(char, 1);
        }
        else {
            substringCount++;
            map.clear();
            map.set(char, 1);
        }
    }

    return substringCount + 1;
};


/*-------------------------------------------------------------------------
3. DECODE STRING
Time complexity -                       Runtime - 40ms
Space complexity -                      Memory Usage - 42.4MB
-------------------------------------------------------------------------- */
var decodeString = function (s) {
    const stack = [];

    for (let char of s) {
        if (char !== "]") {
            stack.push(char);
            continue;
        }
        let current = stack.pop();
        let string = '';
        while (current !== '[') {
            string = current + string;
            current = stack.pop();
        }
        let number = '';
        current = stack.pop();
        while (!Number.isNaN(Number(current))) {
            number = current + number;
            current = stack.pop();
        }
        stack.push(current);
        stack.push(string.repeat(Number(number)));
    }
    return stack.join('');
};