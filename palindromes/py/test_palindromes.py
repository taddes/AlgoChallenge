from palindromes import palindrome


def test_answer():
    assert palindrome('abba') == True 

def test_answer2():
    assert palindrome(' abba') == False 