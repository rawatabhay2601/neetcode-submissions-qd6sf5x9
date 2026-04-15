class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate i
            if (nums[i] > 0) break; // no need to continue, all remaining numbers are > 0

            let j = i + 1;
            let k = nums.length - 1;

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    result.push([nums[i], nums[j], nums[k]]);

                    // skip duplicates for j and k (compare to neighbor inside the same side)
                    while (j < k && nums[j] === nums[j + 1]) j++;
                    while (j < k && nums[k] === nums[k - 1]) k--;

                    // finally move past the current distinct pair
                    j++;
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    k--;
                }
            }
        }

        return result;
    }
}
