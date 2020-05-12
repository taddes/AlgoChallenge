# Runtime Complexity

## Performance of an algorithm
How much more processing power/time is required to run your algorithm, if you increase the inputs?

### String reverse
Iterative solution using for loop
Linear runtime
Direct 1:1 relationship between input and work to process
1 additional unit of work for each element that is added
```
function reverse(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
```

## Runtimes

### Constant Time O(1)
No matter how many elements we're working with, the algorithm/operation/whatever will always take the same amount of time.

### Linear Time O(n)
Iterating through all elements in a collection. If you seee a loop spanning 0 to the last element of an array, you probably have 'n', or linear runtime

### Logarithmic Time O(log n)
If you are iterating over something and it doesn't double the amount of work. Always assume that searching operations are log(n)

### Quadratic Time O(n^2)
Every element in in a collection has to be compared to every other element. The 'handshake' problem, loop within a loop. Iter rows, then columns, etc.

### Quasilinear Time O(n log(n))
If you are doubling the number of elements you are iterating over and doesn't double your work. Always assume that any sorting operation is n * log(n)

### Exponential Time O(2^n)
If you add a single element to a collection, the required processing doubles. Terrible and to be avoided.

## Identifying Runtime Complexity

#### Iterating with a simple loop through a single collection?
Probably **O(n)**

#### Iterating through half a collection? A smaller value modifying the loop?
Still **O(n)**. There are no constants in a runtime. Always simplify to O(n)

#### Iterating through two different collections with seperate loops?
**O(n + m)** can simplify to **O(n)**. Good to split into two seperate terms.

#### Two nested loops iterating over the same collections?
**O(n^2)** A general red flag for efficiency. Quadratic 

#### Two nested for loops iterating over different collections?
**O(n*m)** varied lenghts of both can have an effect. Simplifies to **O(n^2)**

#### Sorting?
**O(n*log(n))**

#### Searching (sorted array)?
**O(log(n))**

