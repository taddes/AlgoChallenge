# --- Directions
# Given an integer, return an integer that is the reverse
# ordering of numbers.
# --- Examples
#   reverseInt(15) === 51
#   reverseInt(981) === 189
#   reverseInt(500) === 5
#   reverseInt(-15) === -51
#   reverseInt(-90) === -9

# def rev_int(n):
#     """Simplest Solution. Cast to string, slice to reverse, cast back to int"""
#     return int(str(n)[::-1])


def rev_int(n):
    """Use list comprehension"""
    rev = [char for char in str(n)]
    rev.reverse()
    return int(''.join(rev))

print(rev_int(89))