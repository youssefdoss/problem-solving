var Node = function() {
  this.keys = new Map();
  this.end = false;
}

var Trie = function() {
  this.root = new Node;
};

/**
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word, node = this.root) {
  if (word.length === 0) {
      node.end = true;
      return;
  }

  if (!node.keys.has(word[0])) {
      node.keys.set(word[0], new Node());
  }
  return this.insert(word.slice(1), node.keys.get(word[0]));
};

/**
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word, node = this.root) {
  if (!node.keys.has(word[0])) {
      return false;
  } else if (word.length === 1) {
      if (node.keys.get(word[0]).end) {
          return true;
      } else {
          return false;
      }
  } else {
      return this.search(word.slice(1), node.keys.get(word[0]));
  }
};

/**
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix, node = this.root) {
  if (prefix.length === 0) {
      return true;
  }

  if (!node.keys.has(prefix[0])) {
      return false;
  } else {
      return this.startsWith(prefix.slice(1), node.keys.get(prefix[0]));
  }
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/