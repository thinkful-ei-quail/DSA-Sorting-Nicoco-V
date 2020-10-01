const LinkedList = require('./LinkedList');

const linkedList = new LinkedList();
linkedList.insertLast(5);
linkedList.insertLast(8);
linkedList.insertLast(7);
linkedList.insertLast(3);
linkedList.insertLast(1);
linkedList.insertLast(0);
linkedList.insertLast(9);
linkedList.insertLast(23);
linkedList.insertLast(5);
linkedList.insertLast(4);
linkedList.insertLast(10);
linkedList.insertLast(2);

// console.log(linkedList); // 5 >> 8 >> 7 >> 3 >> 1 >> 0 >> 9 >> 5 >> 8 >> 4 >> 10 >> 2

function mSortLinkedList(linkedList) {
  if (!linkedList.head.next) {
    return linkedList;
  }

  const middle = findMiddleValue(linkedList);
  let left = createLeftList(linkedList, middle);
  let right = createRightList(linkedList, middle);

  left = mSortLinkedList(left);
  right = mSortLinkedList(right);

  return mergeLinkedList(left, right, linkedList);
}

function findMiddleValue(linkedList) {
  let slowPoint = linkedList.head;
  let fastPoint = linkedList.head;
  while (fastPoint && fastPoint.next) {
    slowPoint = slowPoint.next;
    fastPoint = fastPoint.next.next;
  }
  return slowPoint.value;
}

function createLeftList(linkedList, middle) {
  const leftList = new LinkedList();
  const middleNode = linkedList.find(middle);
  let currentNode = linkedList.head;
  while (currentNode !== middleNode) {
    leftList.insertLast(currentNode.value);
    currentNode = currentNode.next;
  }
  return leftList;
}

function createRightList(linkedList, middle) {
  const rightList = new LinkedList();
  const middleNode = linkedList.find(middle);
  let currentNode = middleNode;
  while (currentNode) {
    rightList.insertLast(currentNode.value);
    currentNode = currentNode.next;
  }
  return rightList;
}

function mergeLinkedList(left, right) {
  let currentNodeLeft = left.head;
  console.log('left node: ', currentNodeLeft);
  let currentNodeRight = right.head;
  console.log('right node: ', currentNodeRight);
  let mergedList = new LinkedList();

  while (currentNodeLeft && currentNodeRight) {
    if (currentNodeLeft.value < currentNodeRight.value) {
      mergedList.insertLast(currentNodeLeft.value);
      currentNodeLeft = currentNodeLeft.next;
    }
    else {
      mergedList.insertLast(currentNodeRight.value);
      currentNodeRight = currentNodeRight.next;
    }
  }

  while (currentNodeLeft) {
    mergedList.insertLast(currentNodeLeft.value);
    currentNodeLeft = currentNodeLeft.next;
  }
  while (currentNodeRight) {
    mergedList.insertLast(currentNodeRight.value);
    currentNodeRight = currentNodeRight.next;
  }
  console.log('merged list: ', display(mergedList));
  return mergedList;
}

// console.log(mSortLinkedList(linkedList)); // 0 >> 1 >> 2 >> 3 >> 4 >> 5 >> 5 >> 7 >> 8 >> 8 >> 9 >> 10

const display = function (linkedList) {
  let displayList = "";
  let currentNode = linkedList.head;
  while (currentNode !== null) {
    displayList += `${currentNode.value}, `;
    currentNode = currentNode.next;
  }
  return displayList;
};

console.log(display(linkedList));

console.log(display(mSortLinkedList(linkedList)));