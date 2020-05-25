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

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    } 

    while (node) {
      if (node.next === null) {
        return node;
      }
      node = node.next
    }
  }

  clear() {
    this.head = null; 
  }

  removeFirst() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      return null;
    } else {
      let currentNode = this.head;
      let previousNode = this.head.next;
      while (currentNode) {
        if (previousNode.next === null) {
         currentNode.next = null;
        }
        currentNode = previousNode
        previousNode = previousNode.next
      }
    }
  }

  insertLast(data) {
    let last;
    if (!this.head) {
      last = null;
    }
    let node = this.head;

    while (node) {
      if (!node.next) {
        last = node;
        break;
      }
      node = node.next;
    }
    last.next = new Node(data)
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;

    while (counter < index) {
      if (!node) {
        return null;
      }
      node = node.next;
      counter++
    }
    return node;
  }

  removeAt(index) {
    let prevNode = this.head;
    let node = this.head.next;
    let counter = 0;
    if (!this.head) {
      return;
    }
    
    while (prevNode) {
      if (counter === index) {
        if (node.next) {
          prevNode = node.next;
        }
      }
      counter++;
      node = node.next;
      prevNode = prevNode.next;
    }
  }
}




list = new LinkedList()

list.insertFirst(123)
list.insertFirst(456)
console.log(list)
console.log(list.size())

module.exports = { Node, LinkedList };