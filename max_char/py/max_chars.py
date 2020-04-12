# --- Directions
# What is the most common Char in the string?
# Does string A have the same number of characters as string B (is an anagram)?
# Does the given string have any repeated characters in it?
# Given a string, return the character that is most
# commonly used in the string.
# --- Examples
# maxChar("abcccccccd") === "c"
# maxChar("apple 1231111") === "1"

# Test solution
def max_characters(string):
    chars = [char for char in string]
    char_count = set(chars)
    char_dict = {char:0 for char in char_count}
    for char in chars:
        if char in char_dict.keys():
            char_dict[char] += 1
    largest = max(char_dict.values())
    for key, val in char_dict.items():
        if val == largest:
            return key

print(max_characters('Doggeh Doggeh'))