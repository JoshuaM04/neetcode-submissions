class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map([]);

        // Sort Array
        for (const string of strs) {
            const key = string.split("").sort().join("");

            if (!anagrams.has(key)) {
                anagrams.set(key, []);
            }

            anagrams.get(key).push(string);
        }

        const result = Array.from(anagrams.values());

        return result;
    }
}
