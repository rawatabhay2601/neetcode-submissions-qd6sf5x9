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
     * @return {number}
     */
    diameterOfBinaryTree(root) {

        let diameter = 0;

        function height(node) {
            
            if (node == null) return 0;

            let leftHeight = height(node.left);
            let rightHeight = height(node.right);

            // update diameter
            diameter = Math.max(diameter, leftHeight + rightHeight);

            return 1 + Math.max(leftHeight, rightHeight);
        };

        height(root);
        return diameter;
    }
}
