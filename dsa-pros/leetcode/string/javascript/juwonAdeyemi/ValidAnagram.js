/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) false;

  return (
    s.toLowerCase().split("").sort().join("") ===
    t.toLowerCase().split("").sort().join("")
  );
};
