# --- Directions
# Write a function that returns the number of vowels
# used in a string.  Vowels are the characters 'a', 'e'
# 'i', 'o', and 'u'.
# --- Examples
#   vowels('Hi There!') --> 3
#   vowels('Why do you ask?') --> 4
#   vowels('Why?') --> 0


"""Snazzy Dict/list comp solution"""
def vowels(string):
    vowel_count = {char:sum([1 for letter in string if letter == char]) for char in 'aeiou'}
    return sum(vowel_count.values())

"""simple iterative approach"""
def vowels_iterative(string):
    counter = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    for char in string:
        if char in vowels:
            counter += 1
    return counter


"""Regex alternative"""
def vowels_regex(string):
    import re
    matches = re.findall(r'[aeiou]*', string, re.IGNORECASE)
    return matches


"""alt just using string"""
def vowels_iterative_2(string):
    counter = 0
    for char in string:
        if char in 'aeiou':
            counter += 1
    return counter

"""really nice solution with advanced syntax"""
def vowels_iterative_3(string):
    vowels = 'aeiou'
    # Initialize count as a dict with vowel names as keys
    count = {}.fromkeys(vowels, 0)
    for char in string:
        if char in count:
            count[char] += 1
    return count


print(vowels('kaairk'))

print(vowels_iterative('limeeee'))

print(vowels_iterative_3('stre'))

print(vowels_regex('karka'))