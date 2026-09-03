class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(nums1, nums2) {
        const arr1 = new Set(nums1);
        const arr2 = new Set(nums2);
        const res = [];

        for (const element of arr1) {
            if (arr2.has(element)) {
                res.push(element);
            }
        }

        return res;
    }
}
