""" 
--- Directions
Print out the n-th entry in the fibonacci series.
The fibonacci series is an ordering of numbers where
each number is the sum of the preceeding two.
For example, the sequence
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
forms the first ten entries of the fibonacci series.
Example:
fib(4) === 3
"""

def fib(n):
    fib_list = [0, 1]
    for _ in range(2, n + 1):
        a = fib_list[_ - 1]
        b = fib_list[_ - 2]
        fib_list.append(a+b)
    return fib_list

print(fib(6))

def fib_recursive(n):
    if n < 2: 
        return n
    else: 
        return fib_recursive(n - 1) + fib_recursive(n - 2)

print(fib_recursive(20))

