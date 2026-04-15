class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        
        let left = 0;
        let maxLength = 0;
        let lastIndex = new Map();

        for(let right=0; right<s.length; right++) {
            
            const ch = s[right];

            if (lastIndex.has(ch)) {
                // this is because we need to move one step ahead of the previously found step
                left = Math.max(left, lastIndex.get(ch) + 1);
            }

            lastIndex.set(ch, right);

            maxLength = Math.max(maxLength ,right-left+1);
        }

        return maxLength;
    }
}