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
    if n < 0:
        sign = -1
    else:
        sign = 1
    rev = [char for char in str(n) if char.isnumeric()]
    print(rev)
    rev.reverse()
    print(rev)
    return int(''.join(rev)) * sign

print(rev_int(-89))