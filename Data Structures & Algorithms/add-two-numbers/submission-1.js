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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let currOne = l1;
        let currTwo = l2;

        let arrOne = [];
        let arrTwo = [];

        while (currOne) {
            arrOne.push(currOne.val);
            currOne = currOne.next;
        }

        while (currTwo) {
            arrTwo.push(currTwo.val);
            currTwo = currTwo.next;
        }

        let valueOne = BigInt(arrOne.reverse().join(""));
        let valueTwo = BigInt(arrTwo.reverse().join(""));

        let sum = valueOne + valueTwo;

        let arrThree = sum.toString().split("").reverse();

        const node = { value: 0, next: null };
        let head = node;
        let current = head;

        for (let i = 0; i < arrThree.length; i++) {
            current.val = BigInt(arrThree[i]);

            if (i < arrThree.length - 1) {
                current.next = { value: 0, next: null };
            }

            current = current.next;
        }

        return head;
    }
}
