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
    for index, number in enumerate(range(0, n + 1)):
        print(index, number, fib_list[index -1])
        fib_list.append(number + fib_list[index - 1])
    return fib_list

print(fib(5))