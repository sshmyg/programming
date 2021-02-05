const bubbleSort = (arr) => {
  let swaped = true;

  while (swaped) {
    swaped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];

        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swaped = true;
      }
    }
  }

  return arr;
};

// console.log(bubbleSort([3, 5, 1, 8, 10]));

const binarySearch = (el, arr, start = 0, end = arr.length - 1) => {
  if (start > end) {
    return -1;
  }

  const mid = Math.ceil((start + end) / 2);

  if (arr[mid] === el) return mid;

  if (el > arr[mid]) {
    return binarySearch(el, arr, mid + 1, end);
  } else {
    return binarySearch(el, arr, start, mid - 1);
  }
};

// console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9]));

const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const j = Math.ceil(Math.random() * arr.length - 1);

    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }

  return arr;
};

//console.log(shuffle([1, 2, 3, 4, 5]));

let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

// console.log(selectionSort([3, 5, 1, 8, 10]));

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let index = 1; index < arr.length; index++) {
    if (pivot > arr[index]) {
      left.push(arr[index]);
    }

    if (pivot < arr[index]) {
      right.push(arr[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

// console.log(quickSort([12, 45, 1, 5, 3, 7, 14, 29, 30, 55]));

const fib = (n) => {
  if (n < 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

// console.log(fib(10));

class Node {
  left = null;
  right = null;

  constructor(data) {
    this.data = data;
  }
}

// https://webdevblog.ru/dvoichnoe-derevo-poiska-na-javascript/
class BinarySearchTree {
  root = null;

  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode); // helper method below
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraverse(node, callback) {
    if (node != null) {
      this.inOrderTraverse(node.left, callback);
      callback(node.data);
      this.inOrderTraverse(node.right, callback);
    }
  }

  preOrderTraverse(node, callback) {
    if (node != null) {
      callback(node.data);
      this.preOrderTraverse(node.left, callback);
      this.preOrderTraverse(node.right, callback);
    }
  }

  postOrderTraverse(node, callback) {
    if (node != null) {
      this.postOrderTraverse(node.left, callback);
      this.postOrderTraverse(node.right, callback);
      callback(node.data);
    }
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }
}

const BST = new BinarySearchTree();
BST.insert(11);
BST.insert(7);
BST.insert(9);
BST.insert(15);
BST.insert(6);
// console.log(BST);
