class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const mapS = new Map();
        const mapT = new Map();

        for (const element of s) {
            if (mapS.has(element)) {
                const freq = mapS.get(element);
                mapS.set(element, freq + 1);
            } else {
                mapS.set(element, 1);
            }
        }

        for (const element of t) {
            if (mapT.has(element)) {
                const freq = mapT.get(element);
                mapT.set(element, freq + 1);
            } else {
                mapT.set(element, 1);
            }
        }

        for (const [key, value] of mapS) {
            if (mapT.get(key) !== value) return false;
        }

        return true;
    }
}
