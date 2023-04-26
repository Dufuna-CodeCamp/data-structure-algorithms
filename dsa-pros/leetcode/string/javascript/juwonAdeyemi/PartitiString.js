/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let count = 1;
  let partition = s[0];

  for (let i = 1; i < s.length; i++) {
    if (!partition.includes(s[i])) {
      partition += s[i];
    } else {
      count++;
      prevChars = s[i];
    }
  }

  return count;
};
