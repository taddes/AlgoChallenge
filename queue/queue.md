## QUEUE
**FIFO - First In, First Out**
- Smallest index is the first to be accessed (LEFT TO RIGHT) 
- Like a line at a ticket booth. First in line, first to be served.
- Enter at the end, wait in line until it is their turn.

### Methods
JavaScript and Python both have native array/list methods that emulate queue functions. A queue is a more limited/basic data structure compared to its array/list implementations in each language.

Basically, you have to restrict the functions of native array/list operations to create a queue. Class based approach effective to model the data structure.

* Enqueuing/ Adding -> array.shift() or list.pop([i]) or del list[i]
    * Time Complexity: O(1)
* Dequeuing/Removing -> array.shift() or list.pop(0)
    * Time Complexity: O(1)

```javascript
class Queue {
  constructor() {
    this.data = [];
  }

  remove = () => {
    return this.data.shift()
  }

  add = (item) => {
    returh this.data.push(item)
  }
}
```

```python
class Queue:
  def __init__(self):
    self.data = []

  def add(item):
    self.data.append(item)

  def remove():
    return self.data.pop()

```