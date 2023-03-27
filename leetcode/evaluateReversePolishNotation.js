/**
 * Evaluate Reverse Polish Notation
 *
 * You are given an array of strings tokens that represents an arithmetic
 * expression in a Reverse Polish Notation.
 *
 * Evaluate the expression. Return an integer that represents the value of the
 * expression.
 *
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];

  for (let token of tokens) {
      if (isOperand(token)) {
          stack.push(parseInt(token));
      } else {
          let op2 = stack.pop();
          let op1 = stack.pop();

          if (token === '+') {
              stack.push(op1 + op2);
              continue;
          }
          if (token === '-') {
              stack.push(op1 - op2);
              continue;
          }
          if (token === '*') {
              stack.push(op1 * op2);
              continue;
          }
          if (token === '/') {
              stack.push(Math.trunc(op1 / op2));
              continue;
          }
      }
  }

  return stack.pop();
};

function isOperand(token) {
  return !isNaN(token);
}