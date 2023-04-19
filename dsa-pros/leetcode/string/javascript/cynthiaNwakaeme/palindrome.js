/**
 * @param {string, number} str
 * @return {boolean}
 */

const palindrome = (str) => {
  if(!str || str.length < 0) return false;
  str = `${str}`.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverseString = str.split('').reverse().join('');

  return str === reverseString;

}

console.log(palindrome(121));
console.log(palindrome('madam'));
console.log(palindrome('133'));