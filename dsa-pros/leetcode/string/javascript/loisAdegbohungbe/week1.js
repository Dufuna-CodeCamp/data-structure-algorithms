/*-------------------------------------------------------------------------
1. VALID PALINDROME
Time complexity - O(n)                      Runtime - 64ms
Space complexity - O(n)                     Memory Usage - 46.4MB
-------------------------------------------------------------------------- */
var isPalindrome = function (s) {
    var trimmedPhrase = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedPhrase = trimmedPhrase.split('').reverse().join('');

    var isPalindrome = reversedPhrase === trimmedPhrase;

    return isPalindrome;
};

/*-------------------------------------------------------------------------
2. VALID ANAGRAM
Time complexity - O(n)                  Runtime - 103ms
Space complexity - O(1)                 Memory Usage - 47.6MB
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
            substring = array.slice(array.indexOf(s[i]) + 1).join('') + s[i];
        }

        if (substring.length > highestCount) {
            highestCount = substring.length;
        }
    }

    return highestCount;
};

/*-------------------------------------------------------------------------
4. SUBSTRING WITH CONCATENATION OF ALL WORDS
yet to be completed
Time complexity -                       Runtime -
Space complexity -                      Memory Usage -
-------------------------------------------------------------------------- */

var findSubstring = function (s, words) {
    const wordsMap = new Map();

    const mapReset = () => {
        for (let word of words) {
            let count = words.filter(x => x === word).length;
            wordsMap.set(word, count);
        }
    }

    mapReset();
    const result = [];
    const wordLength = words[0].length;
    let shift = 0;

    for (let i = shift; i < s.length; i += shift) {
        let subWord = s.slice(i, i + wordLength);

        if (wordsMap.has(subWord) && wordsMap.get(subWord) !== 0) {
            let currentValue = wordsMap.get(subWord);
            wordsMap.set(subWord, currentValue - 1);

            if ([...wordsMap.values()].every(value => value === 0)) {
                const index = i - wordLength * (words.length - 1);
                result.push(index);
                // shift = -(index - 1);
                mapReset();
            }
            else {
                shift = wordLength;
            }
        }
        else if (wordsMap.has(subWord) && wordsMap.get(subWord) === 0) {
            shift = 0;
            mapReset();
        }
        else {
            mapReset();
            shift = 1;
        }
    }

    return result;
};