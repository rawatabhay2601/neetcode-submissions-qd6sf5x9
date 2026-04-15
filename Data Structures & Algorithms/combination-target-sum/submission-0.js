class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];

        function backtracking(path, index, remaining) {

            if (remaining == 0) {
                result.push([...path]);
                return;
            }

            if (remaining < 0) return;

            for (let i=index; i<nums.length; i++) {
                path.push(nums[i]);

                backtracking(path, i, remaining - nums[i])

                path.pop()
            }
        }

        backtracking([], 0, target);
        return result;
    }
}
