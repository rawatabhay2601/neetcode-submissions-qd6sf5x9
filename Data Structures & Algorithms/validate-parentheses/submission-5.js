class Solution {
    /**
     * @param {ching} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            "}": "{",
            "]": "[",
            ")": "("
        };
        if(s.length%2 !== 0) return false;

        for(let ch of s) {
            if (ch === "[" || ch === "(" || ch === "{") {
                stack.push(ch);
            } else {

                if (stack.length === 0) return false;
                const top = stack.pop();
                if (top !== pairs[ch]) return false;
            }
        }

        return stack.length === 0;
    }
}