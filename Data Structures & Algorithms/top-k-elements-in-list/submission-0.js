class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map([]);
        let count = 0;

        for (const element of nums) {
            if (!map.has(element)) {
                map.set(element, 0);
            }

            let count = map.get(element);

            map.set(element, count + 1);
        }

        const arr = Array.from(map.entries());
        const sortedArr = (arr.sort((a, b) => a[1] - b[1]));
        const countArr = []
        
        console.log(sortedArr);

        // Find top k
        while (count < k) {
            countArr.push(sortedArr.pop());
            count++;
        }

        console.log(countArr);

        return countArr.map(pair => pair[0]);
    }
}
