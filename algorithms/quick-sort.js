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

console.log(quickSort([12, 45, 1, 5, 3, 7, 14, 29, 30, 55]));
