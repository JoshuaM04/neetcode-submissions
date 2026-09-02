class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let n = stones.length;
        let stack = [];
        stack = [...stones];

        for (let i = 0; i < n; i++) {
            stack.sort((a, b) => a - b);

            console.log("Sorted Array:", stack);

            let stoneX = stack[stack.length - 2];
            let stoneY = stack[stack.length - 1];

            if (stoneX === stoneY) {
                stack.pop();
                stack.pop();
                console.log("Checkpoint 1:", stack);
            }

            if (stoneX < stoneY) {
                let newStone = stoneY - stoneX;
                stack.pop();
                stack.pop();
                stack.push(newStone);
                console.log("Checkpoint 2:", stack);
            }
            
            if (stack.length === 1) return stack[0];
        }

        console.log("Checkpoint 3:", stack);

        return 0;
    }
}
