class MinStack {
  constructor() {
      this.stack = [];
      this.minStack = [];
  }
};

/**
 * Min Stack
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 * Implement the MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.stack.length) {
      const popped = this.stack.pop();
      if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
      }
      return popped;
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  if (this.stack.length) {
      return this.stack[this.stack.length - 1];
  }
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  if (this.minStack.length) {
      return this.minStack[this.minStack.length - 1];
  }
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/