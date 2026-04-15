class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {

        let result = [];

        function backtracking(index, path) {

            result.push([...path]);

            for(let i=index; i<nums.length; i++) {

                // take this
                path.push(nums[i]);

                // call next one
                backtracking(i+1, path);

                // backtracking
                path.pop();
            }
        }

        backtracking(0, []);
        return result;
    }
}