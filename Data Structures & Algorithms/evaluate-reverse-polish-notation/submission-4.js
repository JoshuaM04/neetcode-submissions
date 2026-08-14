class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const ops = new Set(["+", "-", "*", "/"]);

        for (const element of tokens) {
            if (ops.has(element)) {
                const b = stack.pop();
                const a = stack.pop();
                let result;
                if (element === "+") result = a + b;
                else if (element === "-") result = a - b;
                else if (element === "*") result = a * b;
                else result = Math.trunc(a / b);
                stack.push(result);
            } else {
                stack.push(parseInt(element, 10));
            }
        }

        return stack.pop();
    }
}
