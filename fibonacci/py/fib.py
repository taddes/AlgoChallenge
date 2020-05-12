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
    for number in range(2, n + 1):
        a = fib_list[number - 1]
        b = fib_list[number - 2]
        fib_list.append(a+b)
    return fib_list

print(fib(6))