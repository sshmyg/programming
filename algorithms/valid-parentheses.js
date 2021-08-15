const isValidParentheses = (s) => {
  const stack = [];
  const mapper = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (const i of s) {
    if (i === '{' || i === '(' || i === '[') {
      stack.push(i);
    } else {
      const actual = stack.pop();
      const expected = mapper[i];

      if (actual !== expected) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValidParentheses('(){}[{]'));
