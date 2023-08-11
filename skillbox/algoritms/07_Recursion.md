Добрый день, Максим!

Тут вам нужно было использовать ListNode и проверять l1, l2, чтобы останавливать рекурсивное выполнение метода. Ниже пример решения.

Так как все остальное выполнено верно, то ваше ДЗ я принимаю, а это исправление оставляю в качестве самостоятельной работы.

const ListNode = require("./ListNode");

class MergeSortRecursion {
  static mergeTwoLists(l1, l2) {
    const ListStartNode = new ListNode();
    let ListCurrentNode = ListStartNode;

    if (l1 === null && l2 === null) {
      return null;
    }

    function choose(l1, l2) {
      if (l1 === null && l2 === null) {
        return;
      }

      if ((l1 === null && l2.next === null) || (l2 === null && l1.next === null)) {
        ListCurrentNode.next = null;
      } else {
        ListCurrentNode.next = new ListNode();
      }

      if (l2 !== null) {
        if (l1 === null || l2.val <= l1.val) {
          ListCurrentNode.val = l2.val;
          ListCurrentNode = ListCurrentNode.next;

          return choose(l1, l2.next);
        }
      }

      if (l1 !== null) {
        if (l2 === null || l1.val < l2.val) {
          ListCurrentNode.val = l1.val;
          ListCurrentNode = ListCurrentNode.next;

          return choose(l1.next, l2);
        }
      }
    }

    choose(l1, l2);

    return ListStartNode;
  }

  static mergeThreeLists(l1, l2, l3) {
    if (l2 === undefined || l1 === undefined) {
      return new Error('There should be two or three lists in arguments');
    }

    if (l3 === undefined) {
      return MergeSortRecursion.mergeTwoLists(l1, l2);
    }

    return MergeSortRecursion.mergeTwoLists(MergeSortRecursion.mergeTwoLists(l1, l2), l3);
  }
}

module.exports = MergeSortRecursion
