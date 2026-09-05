class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let sum = 0;
        let res = nums[0];

        for (const element of nums) {
            if (sum < 0) {
                sum = 0;
            }

            sum += element;
            res = Math.max(res, sum);
        }

        return res;
    }
}