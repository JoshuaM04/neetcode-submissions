class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res =  nums[0];

        for (const element of nums) {
            res = Math.min(res, element);
        }

        return res;
    }
}
