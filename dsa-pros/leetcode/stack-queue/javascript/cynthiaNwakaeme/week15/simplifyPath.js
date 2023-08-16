/**
 * @param {string} path
 * @return {string}
 */

const simplifyPath = (path) => {
  const stack = [];
  const directories = path.split("/");

  for (const str of directories) {
    if (str === "." || !str) continue;
    else if (str === "..") {
      if (stack.length > 0) stack.pop();
    } else stack.push(str);
  }

  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/../"));
// console.log(simplifyPath("/home/"));
// console.log(simplifyPath("/home//foo/"));