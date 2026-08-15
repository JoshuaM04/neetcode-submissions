class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredArr = []
        const values = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" 
        ]

        for (const element of s) {
            if (element !== " " && values.includes(element)) {
                filteredArr.push(element.toLowerCase());
            }
        }

        console.log(filteredArr);
        console.log(filteredArr.reverse());

        return filteredArr.join("") === filteredArr.reverse().join("");
    }
}
