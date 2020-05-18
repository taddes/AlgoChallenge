// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {}

n = new Node(123)
console.log(n)
console.log(n.data)

module.exports = { Node, LinkedList };