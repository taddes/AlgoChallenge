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

    if (this.head === null) {
      return counter;
    } else {
      let nextNode = this.head.next;
      counter += 1
      while (nextNode) {
        counter += 1
        nextNode = nextNode.next
      }
      return counter;
    }
  }
}




list = new LinkedList()

list.insertFirst(123)
list.insertFirst(456)
console.log(list)
console.log(list.size())

module.exports = { Node, LinkedList };