// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false


var validPalindrome = function (s) {
    let firstIndex = 0;
    let LastIndex = s.length - 1;

    while (firstIndex < LastIndex) {
        if (s[firstIndex] !== s[LastIndex]) {
            const checkLeft = checkInnerPalindrome(firstIndex + 1, LastIndex, s)
            const checkRight = checkInnerPalindrome(firstIndex, LastIndex - 1, s)
            return checkLeft || checkRight;
        }
        firstIndex++;
        LastIndex--;
    }
    return true;
};

function checkInnerPalindrome(firstIndex, LastIndex, s) {
    while (firstIndex < LastIndex) {
        if (s[firstIndex] !== s[LastIndex]) {
            return false;
        }
        firstIndex++;
        LastIndex--;
    }
    return true;
}