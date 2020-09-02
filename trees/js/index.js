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