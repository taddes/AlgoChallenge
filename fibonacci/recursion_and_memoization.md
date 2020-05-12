## Recursive solution to Fibonacci
Common knowlege. Less about testing your ability, but more as to whether you understand the problem from previous experience. People can answer it this way because they've seen it before!

### Runtime complexity
Exponential Time **O(2^n)**solution (generally unscalable). Dramatic increase in the number of operations for each value added

### Base case
if we return fib(0) we get 0, if we return fib(1), we get 1. This is the base case. We don't really care about 0 because it returns 0. 1, however matters, because added up it builds the fibonacci sequence. It needs to be in place and when we hit this threshold, it returns the same value.

Work your way down the tree until you hit the base case. For this evaluation, you break into two stems of the tree: n-1 and n-2, so fib(6) splits to fib(5) and fib(4). You basically add up all the tree branches that terminate in a fib(1) from each branch.

```javascript
function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}
```

```python
def fib_recursive(n):
    if n < 2: 
        return n
    else: 
        return fib_recursive(n - 1) + fib_recursive(n - 2)
```
## Fibonacci Tree Diagram
```                        fib(6)
             fib(5)                              fib(4)
       fib(4)                 fib(3)            fib(3)         fib(2)
      fib(3)      fib(2)     fib(2) fib(1)     fib(2) fib(1)       fib(1) fib(0)
   fib(2) fib(1)  fib(1)     fib(1) fib(0)     fib(1) fib(0)  
  fib(1) fib(0)

  COUNT UP fib(1) ... fib(6) == 8
```
### Can you improve the runtime efficiency of the recursive Fibonacci solution?
*False flag question. You have to know this already, not invent it on call*
The fib function gets called a *lot* for the identical arguments. Can this be reduced? How do we prevent spawning countless function calls.


## Memoization
Store the arguments of each function call along with the result. If the function is called again with tehs ame arguments, return the precomputed result, rather than running the function again. Caching

