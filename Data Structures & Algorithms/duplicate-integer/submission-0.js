class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const filteredArr = new Set([]);

        for (const element of nums) {
            filteredArr.add(element);
        }

        console.log("Original Array:", nums);
        console.log("Filtered Array:", filteredArr);

        return filteredArr.size < nums.length;
    }
}
