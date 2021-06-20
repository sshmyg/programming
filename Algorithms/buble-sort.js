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

console.log(bubbleSort([3, 5, 1, 8, 10]));
