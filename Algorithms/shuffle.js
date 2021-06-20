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

console.log(shuffle([1, 2, 3, 4, 5]));
