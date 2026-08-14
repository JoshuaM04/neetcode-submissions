class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0;
        }

        const set = new Set([]);
        let maxStreak = 0;

        for (let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }

        for (const value of set) {
            if (!set.has(value - 1)) {
                let currentNum = value;
                let streak = 1;

                while (set.has(currentNum + 1)) {
                    currentNum++;
                    streak++;
                }

                if (streak > maxStreak) {
                    maxStreak = streak;
                }
            } 
        }

        return maxStreak;
    }
}
