function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// [1, 2, 3, 3, 3, 4, 4, 5];
const deleteDuplicates = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  if (head.val === head.next.val) {
    while (head.next !== null && head.val === head.next.val) {
      head = head.next;
      // console.log(head);
    }

    return deleteDuplicates(head.next);
  } else {
    head.next = deleteDuplicates(head.next);
    return head;
  }
};

// 입력 배열을 기반으로 링크드 리스트 생성
function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// 링크드 리스트를 배열로 변환
function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const inputArray = [1, 2, 3, 3, 3, 4, 4, 5];
const inputList = arrayToLinkedList(inputArray);
const result = deleteDuplicates(inputList);
console.log(result);
console.log(linkedListToArray(result));
