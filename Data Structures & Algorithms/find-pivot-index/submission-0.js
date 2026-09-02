class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        nums.unshift(0);
        nums.push(0);
        if (nums.length === 1 || nums.length === 0) return -1;
        let sumL = 0;
        let sumR = 0;
        
        let count = 0;

        for (let i = 1; i < nums.length; i++) {
            // Left Side Calculation
            for (let j = 0; j < i; j++) {
                sumL += nums[j];
            }
            
            // Right Side Calculation
            for (let j = nums.length - 1; j > i; j--) {
                sumR += nums[j];
                count++;
            }
        
            console.log("SumL:", sumL);
            console.log("SumR:", sumR);

            if (sumL === sumR) return i - 1;

            sumL = 0;
            sumR = 0;
        }

        return -1;
    }
}
