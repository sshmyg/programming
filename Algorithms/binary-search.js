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

console.log(binarySearch(9, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
