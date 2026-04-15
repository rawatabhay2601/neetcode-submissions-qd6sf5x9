class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {

        let final = 0;

        // using XOR technique
        for(let num of nums) {
            final ^= num;
        };

        return final;
    }
}
