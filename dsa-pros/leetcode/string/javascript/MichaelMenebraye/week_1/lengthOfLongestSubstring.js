
// leetcode 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


var lengthOfLongestSubstring = function (s) {
    let maxLength = 0;
    let start = 0;
    let seenChars = {};

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        const prevSeenChar = seenChars[currentChar];

        // If the current character is a repeat, update the start of the substring
        // to the index after the last occurrence of the current character.
        if (prevSeenChar >= start) {
            // console.log(currentChar, 'currentChar')
            start = prevSeenChar + 1;
        }
        
        // Update the length of the longest substring if necessary.
        maxLength = Math.max(maxLength, end - start + 1);

        // Update the index of the last seen occurrence of the current character.
        seenChars[currentChar] = end;
    }
    return maxLength;

};

console.log(lengthOfLongestSubstring('abcabcbb'))