/*
Merge Two Sorted Lists

https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1
 */


var mergeTwoLists = function (l1, l2) {
    const result = new ListNode(-1)
    let temp = result

    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }

    temp.next = !l1 ? l2 : l1
    return result.next
};
