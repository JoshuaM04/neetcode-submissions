class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let sum = 0;
        let newArr = [];

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                newArr.push(+(newArr[newArr.length - 2] + newArr[newArr.length - 1]));
            } else if (operations[i] === "D") {
                newArr.push(+(newArr[newArr.length - 1]) * 2);
            } else if (operations[i] === "C") {
                newArr.pop();
            } else {
                newArr.push(+(operations[i]))
            }
        }

        console.log("New Array:", newArr);
        
        for (const element of newArr) {
            sum += element;
        }

        return sum;
    }
}
