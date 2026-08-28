/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head;
        let prev = null;
        let count = 1;

        // Reverse Linked List
        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        head = prev;

        let newCurr = head;
        let newPrev = null;

        while (newCurr) {
            if (count === n) {
                if (!newPrev) {
                    head = newCurr.next;
                } else {
                    newPrev.next = newCurr.next;
                }
            }

            newPrev = newCurr;
            newCurr = newCurr.next;
            count++;
        }

        curr = head;
        prev = null

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        return prev;
    }
}
