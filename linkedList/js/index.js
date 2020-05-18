// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    
    return counter;
  }
}




list = new LinkedList()

list.insertFirst(123)
list.insertFirst(456)
list.insertFirst(7)
list.insertFirst(89)
console.log(list)
console.log(list.size())

module.exports = { Node, LinkedList };