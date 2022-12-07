/*
Middle of the Linked List

https://leetcode.com/problems/middle-of-the-linked-list/description/
 */

var middleNode = function (head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
