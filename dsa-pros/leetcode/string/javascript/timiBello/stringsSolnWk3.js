//  WK - 3  Questions

// QUESTION 1
// Runtime: 63ms, memory 42.5mb
// O(n) Time complexity
//  Space complexity: O(n)(depends on the length s)
('https://leetcode.com/problems/split-a-string-in-balanced-strings/');

/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
    let counter = 0
    let answer = 0
    for (let i = 0; i < s.length; i++  ) {
        if (s[i] == 'L') {
            counter++
        } else {
            counter --
        } if (counter === 0) {
            answer ++
        }
    } 
    return answer
};


// QUESTION 2
// Runtime: 64ms, memory 44.8mb
// O(m x n) Time complexity
//  Space complexity: O(m+n)
'https://leetcode.com/problems/multiply-strings/';

/**
 * @param {string} m
 * @param {string} n
 * @return {string}
 */

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  const m = num1.length,
    n = num2.length,
    res = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join('');
};


