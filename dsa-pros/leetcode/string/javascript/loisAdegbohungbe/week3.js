/*-------------------------------------------------------------------------
1. SPLIT A STRING IN BALANCED STRINGS
Time complexity - O(n)                   Runtime - 61ms
Space complexity - O(1)                  Memory Usage - 43.1MB
-------------------------------------------------------------------------- */
const balancedStringSplit = function (s) {
    let result = 0;
    let count = 0;
    for (let char of s) {
        if (char === 'R') {
            result += 1;
        }
        else {
            result -= 1;
        }

        //if count of R is equal to count of L
        if (result === 0) {
            count += 1;
        }
    }

    return count;
};

/*-------------------------------------------------------------------------
2. MULTIPLY STRINGS
Time complexity - O(n * m)              Runtime - 71ms
Space complexity - O(n)                 Memory Usage -  45.1MB
-------------------------------------------------------------------------- */
var multiply = function (num1, num2) {
    const m = num1.length;
    const n = num2.length;

    //maximum length of product would always be m + n
    const values = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const product = num1.charAt(i) * num2.charAt(j);

            //add existing product to current product
            const sum = values[i + j + 1] + product;

            //carry over to the previous index
            values[i + j] += Math.floor(sum / 10);

            //value on current index
            values[i + j + 1] = sum % 10;
        }
    }

    if (values.every(x => x === 0)) return "0";

    return (values.join('') + '').replace(/^0+/, '');
};

/*-------------------------------------------------------------------------
3. REORGANIZE STRING
Time complexity -                       Runtime - 83ms
Space complexity -                      Memory Usage - 45.7MB
-------------------------------------------------------------------------- */
/*
import {
    MaxPriorityQueue
} from '@datastructures-js/priority-queue';
*/

var reorganizeString = function (s) {
    const map = {};
    const maxHeap = new MaxPriorityQueue();

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char in map) {
        maxHeap.enqueue(char, map[char]);
    }

    const maxChar = maxHeap.front().element;
    const maxCharCount = map[maxChar];

    //check if the maximum character count is greater than half the length of thes string.
    //in which case the reorgaizing is impossible
    if (maxCharCount > Math.floor((s.length + 1) / 2)) return '';

    const result = new Array(s.length);
    let position = 0;

    while (!maxHeap.isEmpty()) {
        const char = maxHeap.dequeue().element;
        const count = map[char];

        for (let j = 0; j < count; j++) {
            result[position] = char;
            position += 2;

            //this would happen only once for the char with the maximum count
            if (position >= s.length) position = 1;
        }
    }

    return result.join('');
};

/*-------------------------------------------------------------------------
4. REGULAR EXPRESSION MATCHING
Time complexity -                       Runtime - 
Space complexity -                      Memory Usage -  
-------------------------------------------------------------------------- */

