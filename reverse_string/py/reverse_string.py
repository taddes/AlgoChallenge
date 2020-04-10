from functools import reduce
"""
    Given a string, reverse all characters and return this new string.
"""

# def reverse(string):
#     """Simplest implementation, using python string slice"""
#     return string[::-1]

def reverse(string):
    """Simple implementation using iterative methods"""
    # NOTE can't just split() on string, naturally splits wherever whitespace is. Best to use a list comp or for loop to make an iterable of entire string
    reversed = [char for char in string]
    # NOTE beware that the reverse() method returns NONE, and acts in place on the list, so don't chain these methods together.
    reversed.reverse()
    return ''.join(reversed)



# def reverse(string):
#     """Solution 2: Iterate through string and append to new string"""
#     reversed = ''
#     for char in string:
#         reversed = char + reversed
#     return reversed

# def reverse(string):
#     return reduce(lambda x: x,list(string))
print(reverse('Test string'))