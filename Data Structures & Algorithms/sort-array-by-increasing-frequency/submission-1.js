class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const map = new Map();

        for (const element of nums) {
            if (map.has(element)) {
                let freq = map.get(element);
                map.set(element, freq + 1);
            } else {
                map.set(element, 1);
            }
        }

        nums.sort((a, b) => {
            if (map.get(a) !== map.get(b)) return map.get(a) - map.get(b);
            return b - a;
        });

        return nums;
    }
}
