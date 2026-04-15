class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj = {};

        for (let str of strs) {
            let key = str.split("").sort().join("");

            if (obj[key]) {
                obj[key] = [...obj[key], str];
            } else {
                obj[key] = [str];
            }
        }

        return Object.values(obj);
    }
}
