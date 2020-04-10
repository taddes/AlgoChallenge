
def palindrome(string):
    reversed = string[::-1]
    if reversed == string:
        return True
    else:
        return False

print(palindrome('aba'))

