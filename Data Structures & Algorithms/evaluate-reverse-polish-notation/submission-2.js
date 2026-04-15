class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        let stack = [];
        let operation = ["*", "+", "-", "/"];
        let ops = {
            "+": (a,b) => a+b,
            "-": (a,b) => a-b,
            "*": (a,b) => a*b,
            "/": (a,b) => Math.trunc(a/b)
        };

        for(let tok of tokens) {
            if (operation.includes(tok)) {
                let second = stack.pop();
                let first = stack.pop();

                let val = ops[tok](first, second);

                stack.push(val);
            } else {
                stack.push(parseInt(tok));
            }
        }

        return stack[0];
    }
}
