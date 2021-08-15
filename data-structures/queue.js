// FIFO, first in first out
// Push, shift
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

// [1, 2, 3]

const item1 = queue.shift(); // 1
const item2 = queue.shift(); // 2
const item3 = queue.shift(); // 3

const isEmpty = queue.length === 0; // true
