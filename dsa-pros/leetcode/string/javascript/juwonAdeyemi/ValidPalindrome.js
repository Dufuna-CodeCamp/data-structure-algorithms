/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let convertString = s.toLowerCase().replace(/[\W_]+/g, "");

  let reserveString = convertString.split("").reverse().join("");
  return convertString === reserveString;
};
