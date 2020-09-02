class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  // Given some data, look at each child and remove any node with data === data
  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift()
      arr.push(...node.children);
      fn(node);
    }
    return arr;
  }
}


trhee = new Tree()
node1 = new Node(55)
trhee.root = node1
console.log(trhee)
console.log(node1.data)
module.exports = { Node, Tree } ;