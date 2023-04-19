// VALID PALINDROME
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var trimmedPhrase = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    var reversedPhrase = trimmedPhrase.split('').reverse().join('');

    var isPalindrome = reversedPhrase === trimmedPhrase;

    return isPalindrome;
};

//VALID ANAGRAM
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const tArray = t.split('');
    const sArray = s.split('');

    if(tArray.length !== sArray.length) {
        return false;
    }

    const countOccurence = (elem, array) => {
        let count = 0;

        if (array.includes(elem)) {
            for (let val of array) {
                if (val === elem) count++;
            }
        }

        return count;
    }

    for (let elem of [...new Set(tArray)]) {
        const inTCount = countOccurence(elem, tArray);
        const inSCount = countOccurence(elem, sArray);

        if (inTCount !== inSCount) return false;
    }

    return true;
};

//LONGEST SUBSTRING WITHOUT REPEATING CHARACTER
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) return 0;
    const sArray = s.split('');

    let string = sArray[0];
    let highestCount = 1;

    for (let i = 1; i < sArray.length; i++) {
        if (!(string.split('').includes(sArray[i]))) {
            string += sArray[i];
        }
        else {
            var index = string.split('').indexOf(sArray[i]);
            string = string.split('').slice(index+1).join('') + sArray[i];
        }

        if (string.length > highestCount) {
            highestCount = string.length;
        }
    }

    return highestCount;
};