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
 * @return {number[]}
 */

const AverageOfLevels = root => {
	let q = [root], result = [];

	while (q.length) {
		let qlen = q.length, row = 0;

		for (let i = 0; i < qlen; i++) {
			let curr = q.shift();
			row += curr.val;
			if (curr.left) q.push(curr.left)
			if (curr.right) q.push(curr.right)
		}
		result.push(row/qlen)
	}
	return result
}

console.log(AverageOfLevels([3,9,20,15,7]))
