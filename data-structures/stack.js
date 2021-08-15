// LIFO, last in first out;
// Push, pop
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

// [1, 2, 3]

const item3 = stack.pop(); // 3
const item2 = stack.pop(); // 2
const item1 = stack.pop(); // 1

const isEmpty = stack.length === 0; // true
