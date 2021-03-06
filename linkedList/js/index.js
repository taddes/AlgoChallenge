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

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    } 

    let node = this.head;

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let nextNode = this.head.next;
    while (nextNode.next) {
      previous = nextNode;
      nextNode = nextNode.next;
      }
      previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // Nodes exist
      last.next = new Node(data);
    } else {
      // chain empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (node) {
      // This evaluates to falsy if node is null, or out of index of list.
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }  

    if (index === 0) {
      // catches the case if there is only one item. this.head.next is null
      // if there is only one element.
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    // get node occuring right before index
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
    }

    const previous = this.getAt(index - 1) || this.getLast();

    const node = new Node(data, previous.next);
    previous.next = node;
  }
  
  forEach(func) {
    let node = this.head;
    let counter = 0;
    while (node) {
      func(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
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