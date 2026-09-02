class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.nums = nums;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        let nums = this.nums;
        nums.push(val);

        nums.sort((a, b) => a - b);

        console.log("Array:", nums);

        let kthLargest = nums[nums.length - this.k];

        return kthLargest;
    }
}
