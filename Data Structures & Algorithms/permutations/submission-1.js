class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []

        function backtracking(path, used) {
            
            // base condition
            if (path.length == nums.length) {
                result.push([...path]);
                return;
            }

            for(let i=0; i<nums.length; i++) {
                if (used[i]) continue;

                used[i] = true;
                path.push(nums[i]);

                backtracking(path, used);

                used[i] = false;
                path.pop();
            }
        }

        backtracking([], new Array(nums.length).fill(false));
        return result;
    }
}