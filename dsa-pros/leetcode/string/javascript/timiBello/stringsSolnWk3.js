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


// QUESTION 3
// Runtime: 73ms, memory 45.2mb
// O(n) Time complexity
//  Space complexity: O(n)
'https://leetcode.com/problems/reorganize-string/';

/**
 * @param {string} s
 * @return {string}
 */
 const reorganizeString = (S = '') => {
  const map = {}
  for (const c of S) {
    map[c] = (map[c] || 0) + 1
  }
  const keys = Object.keys(map).sort((a, b) => map[a] - map[b])
  let key = keys.pop()
  const result = []
  for (let i = 0; i < S.length; i += 2) {
    if (!map[key]) {
      key = keys.pop()
    }
    result[i] = key
    map[key] -= 1
  }
  for (let i = 1; i < S.length; i += 2) {
    if (!map[key]) {
      key = keys.pop()
    }
    result[i] = key
    map[key] -= 1
  }
  return result.every((c, index) => c !== result[index - 1]) ? result.join('') : ''
};





// QUESTION 4 
// Using this recufrsion method seems like it's a long one and the run time is long
// Tried to do it in another way but it didn't pass. Hope to see a more effective methiod
// Runtime: 696ms, memory 42.6mb
// O(n) Time complexity
//  Space complexity: O(n)
'https://leetcode.com/problems/regular-expression-matching/';

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(str, pat) {
    return recursiveIsMatch(0, 0, str, pat);
}
function recursiveIsMatch(i, j, str, pat) {
    const inputStringLength = str.length;
    const patternLength = pat.length;

    // Reached the end of the pattern
    if (j == patternLength) {
        // Return whether or not we've also reached the end of the string (entire string has passed)
        return i == inputStringLength;
    }

    // If the current pattern character is followed by a * (is a wildcard)
    if (j + 1 < patternLength && pat.charAt(j + 1) == '*') {
        // Assume 0 matches of the current pattern character, move on to the next point in the pattern (after the asterisk)
        if (recursiveIsMatch(i, j + 2, str, pat)) return true;

        // Loop through the remaining characters, so long as they match by character (or .)
        while (
            i < inputStringLength &&
            (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
        ) {
            // Check the rest of the string (1 character forward), against the next point in the pattern (after the asterisk)
            if (recursiveIsMatch(++i, j + 2, str, pat)) return true;
        }
    }
    // If the current pattern character is not a wildcard, and matches the current string character
    else if (
        i < inputStringLength &&
        (pat.charAt(j) == '.' || str.charAt(i) == pat.charAt(j))
    ) {
        // Move onto the next character, and the next character of the pattern
        return recursiveIsMatch(i + 1, j + 1, str, pat);
    }

    // String does not match current point in pattern
    return false;
}


