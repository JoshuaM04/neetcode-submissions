class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const arrS = s.split("").sort();
        const arrT = t.split("").sort();

        if (arrS.length !== arrT.length) {
            return false;
        }

        console.log("Array S:", arrS);
        console.log("Array T:", arrT);

        for (let i = 0; i < arrS.length; i++) {
            if (arrS[i] !== arrT[i]) {
                return false;
            }
        }

        return true;
    }
}
