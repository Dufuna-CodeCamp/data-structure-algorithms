/*-------------------------------------------------------------------------
1. VALID PALINDROME
Time complexity -                       Runtime -
Space complexity -                      Memory Usage -
-------------------------------------------------------------------------- */
var isPalindrome = function(s) {
    var trimmedPhrase = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedPhrase = trimmedPhrase.split('').reverse().join('');

    var isPalindrome = reversedPhrase === trimmedPhrase;

    return isPalindrome;
};

/*-------------------------------------------------------------------------
2. VALID ANAGRAM
Time complexity -                       Runtime -
Space complexity -                      Memory Usage -
-------------------------------------------------------------------------- */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }   

    return s.split('').sort().join('') === t.split('').sort().join('');
};

/*-------------------------------------------------------------------------
3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTER
Time complexity - O(n)                  Runtime - 165ms
Space complexity - O(n)                 Memory Usage - 49.6MB
-------------------------------------------------------------------------- */
var lengthOfLongestSubstring = function (s) {
    let substring = '';
    let highestCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (!(substring.split('').includes(s[i]))) {
            substring += s[i];
        }
        else {
            var array = substring.split('');
            substring = array.slice(array.indexOf(s[i]) +1).join('') + s[i];
        }

        if (substring.length > highestCount) {
            highestCount = substring.length;
        }
    }

    return highestCount;
};

/*-------------------------------------------------------------------------
4. SUBSTRING WITH CONCATENATION OF ALL WORDS
Time complexity -                       Runtime -
Space complexity -                      Memory Usage -
-------------------------------------------------------------------------- */