/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */

const anagram = (str1, str2) => {
  if(str1.length < 1 || str2.length < 1 || str1.length !== str2.length) return false;

  const sortedArr1 = str1.toLowerCase().split("").sort();
  const sortedArr2 = str2.toLowerCase().split("").sort();

  for(let i = 0; i < sortedArr1.length; i++) {
    if(sortedArr1[i] !== sortedArr2[i]) return false;
  }

  return true;
}

console.log(anagram('123', ''));
console.log(anagram('112', '121'));
console.log(anagram('cat', 'Act'));
