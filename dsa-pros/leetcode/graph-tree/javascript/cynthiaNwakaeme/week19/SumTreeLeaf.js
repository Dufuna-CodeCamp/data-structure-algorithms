/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} root
 * @return {number}
 */

const SumTreeLeaf = (root) => {
	let sum = 0;
	dfs(root, "");
	return sum;

	function dfs(root, path) {
		if(!root) return;

		if(!root.left && !root.right) {
			sum += parseInt(path + root.val, 2);
			return;
		}
		dfs(root.left, path + root.val);
		dfs(root.right, path + root.val);
	}
};


console.log(SumTreeLeaf([1, 0, 1, 0, 1, 0, 1]))
