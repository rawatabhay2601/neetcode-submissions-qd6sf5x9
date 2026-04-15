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
     * @return {number[][]}
     */
    levelOrder(root) {

        if (root === null) return [];

        let queue = [root];
        let result = [];

        while (queue.length) {

            const currentLevel = [];
            const levelLength = queue.length;

            for (let i=0; i < levelLength; i++) {

                let node = queue.shift();

                currentLevel.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            };

            result.push(currentLevel);
        };

        return result;
    }
}