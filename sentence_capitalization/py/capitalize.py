"""
    --- Directions
    Write a function that accepts a string.  The function should
    capitalize the first letter of each word in the string then
    return the capitalized string.
    --- Examples
    capitalize('a short sentence') --> 'A Short Sentence'
    capitalize('a lazy fox') --> 'A Lazy Fox'
    capitalize('look, it is working!') --> 'Look, It Is Working!'
  """

# Solution 1 - Easiest. Use .title()
# def capital(string):
#     return string.title()

# Solution 2 - Less Graceful loop solution
def capital(string):
    sentence_list = string.split(' ')
    capitalized_list = []
    for word in sentence_list:
        capitalized_list.append(word[0].upper() + word[1:])
    return ' '.join(capitalized_list)

print(capital('This is the state!'))