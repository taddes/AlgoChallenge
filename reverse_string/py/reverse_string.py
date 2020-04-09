from functools import reduce
"""
    Given a string, reverse all characters and return this new string.
"""

# def reverse(string):
#     """Simplest implementation, using python string slice"""
#     return string[::-1]


def reverse(string):
    """Solution 2: Iterate through string and append to new string"""
    reversed = ''
    for char in string:
        reversed = char + reversed
    return reversed

# def reverse(string):
#     return reduce(lambda x: x,list(string))
print(reverse('Test string'))