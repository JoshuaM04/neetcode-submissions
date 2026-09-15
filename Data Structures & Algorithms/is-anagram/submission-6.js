class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        const sArr = s.split("").sort();
        const tArr = t.split("").sort();

        for (let i = 0; i < tArr.length; i++) {
            if (sArr[i] !== tArr[i]) return false;
        }

        return true;
    }
}
