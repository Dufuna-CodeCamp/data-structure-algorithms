/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  var splitS = s.split("");
  if (s === s.split("").reverse().join("")) {
    return true;
  }

  for (let i = 0; i < splitS.length; i++) {
    return splitS.splice(i + 1, 1) == splitS.splice(i - 1, 1).reverse();
  }

  return true;
};
