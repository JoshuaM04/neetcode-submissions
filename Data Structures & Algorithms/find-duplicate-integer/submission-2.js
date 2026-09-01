class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = new Map();

        const dummy = { value: 0, next: null };
        let curr = dummy;

        for (const element of nums) {
            curr.next = { value: element, next: null };
            curr = curr.next;
        }

        let head = dummy.next;
        let newCurr = head;

        console.log(head)

        while (newCurr) {
            if (map.has(newCurr.value)) {
                return newCurr.value;
            }

            map.set(newCurr.value, 1);
            newCurr = newCurr.next;
        }

        return 0;
    }
}
