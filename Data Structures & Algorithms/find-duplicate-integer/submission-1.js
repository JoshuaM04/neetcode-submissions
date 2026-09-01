class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map();

        for (const element of nums) {
            if (map.has(element)) {
                return element;
            } 
            
            map.set(element, 1);
        }

        return 0;
    }
}
