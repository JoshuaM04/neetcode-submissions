class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        const prefixSums = [0];
        let currentSum = 0;

        for (const n of nums) {
            currentSum += n;
            prefixSums.push(currentSum);
        }

        this.sums = prefixSums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        return this.sums[right + 1] - this.sums[left];
    }
}
