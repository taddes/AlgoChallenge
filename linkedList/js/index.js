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
      // catches null as well
      this.head = this.head.next;
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