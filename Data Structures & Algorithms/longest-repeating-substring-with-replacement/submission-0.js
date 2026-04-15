class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        const freq = new Array(26).fill(0);
        let left = 0;
        let right = 0;
        let maxFreq = 0;
        let result = 0;

        for(let right=0; right<s.length; right++) {

            // update freq and maxFreq
            let idx = s.charCodeAt(right) - "A".charCodeAt(0);
            freq[idx]++;

            if (freq[idx] > maxFreq) {
                maxFreq = freq[idx];
            }

            // using while loop to change the window size
            while ((right - left + 1) - maxFreq > k) {
                let leftIndex = s.charCodeAt(left) - "A".charCodeAt(0);
                freq[leftIndex]--; left++;
            }

            result = Math.max(result, right-left+1);
        }

        return result;
    }
}
