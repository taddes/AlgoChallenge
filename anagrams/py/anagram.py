"""
    --- Directions
    Check to see if two provided strings are anagrams of eachother.
    One string is an anagram of another if it uses the same characters
    in the same quantity. Only consider characters, not spaces
    or punctuation.  Consider capital letters to be the same as lower case
    --- Examples
    anagrams('rail safety', 'fairy tales') --> True
    anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    anagrams('Hi there', 'Bye there') --> False
"""
import re

# def is_anagram(str_a, str_b):
#     str_a_strip = re.sub(r'[^\w]', '',  str_a).lower()
#     str_b_strip = re.sub(r'[^\w]', '', str_b).lower()
#     print(str_a_strip, str_b_strip)


# Solution 2
# Exact comparision of the exact same string!!! Very clean, easy way to solve
def clean_str(str):
    cleaned = re.sub(r'[^/w]', '', str).lower()
    print(cleaned)

def is_anagram(str_a, str_b):
    print(clean_str(str_a), clean_str(str_b))
    return clean_str(str_a) == clean_str(str_b)



print(is_anagram('KARK JARK', 'Lethan! BoHn')) 