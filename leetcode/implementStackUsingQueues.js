/**
 * Implement Stack Using Queues
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues. The
 * implemented stack should support all the functions of a normal stack (push,
 * top, pop, and empty).
 *
 * Implement the MyStack class:
 *
 * void push(int x) Pushes element x to the top of the stack. int pop() Removes
 * the element on the top of the stack and returns it. int top() Returns the
 * element on the top of the stack. boolean empty() Returns true if the stack is
 * empty, false otherwise.
 *
 * Notes:
 *
 * You must use only standard operations of a queue, which means that only push
 * to back, peek/pop from front, size and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively. You may
 * simulate a queue using a list or deque (double-ended queue) as long as you
 * use only a queue's standard operations.
 *
 */
var MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/**
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue1.push(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function() {
  while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
  }
  const popped = this.queue1.shift();
  while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
  }
  return popped;
};

/**
* @return {number}
*/
MyStack.prototype.top = function() {
  while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
  }
  const top = this.queue1[0];
  this.queue2.push(this.queue1.shift());
  while (this.queue2.length > 0) {
      this.queue1.push(this.queue2.shift());
  }
  return top;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue1.length === 0;
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = new MyStack()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/