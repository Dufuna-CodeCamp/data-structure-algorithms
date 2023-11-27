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
 * @return {boolean}
 */

//TIME COMPLEXITY: O(N) where N is the number of nodes in the tree
//SPACE COMPLEXITY: O(N)

const SymmetricTree = (root) => {
	if(!root) return true;
	return traverse(root.left, root.right);
};

const traverse = (node1, node2) => {
	if(!node1 && !node2) return true;
	if(!node1 || !node2) return false;
	if(node1.val !== node2.val) return false;

	return traverse(node1.right, node2.left) && traverse(node1.left, node2.right);
}

console.log(SymmetricTree([1, 2, 2, 3, null, 4, 3]));
