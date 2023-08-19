/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const directories = path
    .split("/")
    .filter((dir) => dir !== "" && dir !== ".");
  const stack = [];

  for (const dir of directories) {
    if (dir === "..") {
      stack.pop();
    } else {
      stack.push(dir);
    }
  }

  return "/" + stack.join("/");
};
