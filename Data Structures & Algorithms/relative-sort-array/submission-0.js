class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */
    relativeSortArray(arr1, arr2) {
        const set = new Set(arr2);
        const count = new Map();
        const end = [];

        for (let num of arr1) {
            if (!set.has(num)) {
                end.push(num);
            }
            count[num] = (count[num] || 0) + 1;
        }

        end.sort((a, b) => a - b);
        const res = [];

        for (let num of arr2) {
            for (let i = 0; i < count[num]; i++) {
                res.push(num);
            }
        }

        return res.concat(end);
    }
}
