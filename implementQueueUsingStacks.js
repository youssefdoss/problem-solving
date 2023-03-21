/**
 * Implement Queue using Stacks
 *
 * Implement a first in first out (FIFO) queue using only two stacks. The
 * implemented queue should support all the functions of a normal queue (push,
 * peek, pop, and empty).
 *
 * Implement the MyQueue class:
 *
 * void push(int x) Pushes element x to the back of the queue.
 * int pop() Removes the element from the front of the queue and returns it.
 * int peek() Returns the element at the front of the queue.
 * boolean empty() Returns true if the queue is empty, false otherwise.
 */
var MyQueue = function() {
  this.stack1 = [];
  this.stack2 = [];
};

/**
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stack1.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
      }
  }

  return this.stack2.pop();
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
          this.stack2.push(this.stack1.pop());
      }
  }

  return this.stack2[this.stack2.length - 1];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/