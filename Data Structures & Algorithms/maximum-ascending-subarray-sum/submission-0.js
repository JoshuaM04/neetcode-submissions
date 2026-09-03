class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let res = 0;

        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j - 1] >= nums[j]) {
                    break;
                }

                sum += nums[j];
            }

            res = Math.max(res, sum);
        }

        return res;
    }
}
