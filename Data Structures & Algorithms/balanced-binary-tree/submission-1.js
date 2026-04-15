/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        if (root === null) return true;

        function height(node) {

            if (node === null) return 0;

            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            return 1 + Math.max(leftHeight, rightHeight);
        };

        let leftHeight = height(root.left);
        let rightHeight = height(root.right);

        if (Math.abs(leftHeight - rightHeight) > 1) return false;

        return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
}
