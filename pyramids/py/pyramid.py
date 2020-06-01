#  --- Directions
#  Write a function that accepts a positive number N.
#  The function should console log a pyramid shape
#  with N levels using the # character.  Make sure the
#  pyramid has spaces on both the left *and* right hand sides
#  --- Examples
#    pyramid(1)
#        '#'
#    pyramid(2)
#        ' # '
#        '###'
#    pyramid(3)
#        '  #  '
#        ' ### '
#        '#####'


"""
    From 0 to n, iterate through rows (n == total number of rows)
        create an empty string level
        From 0 to coumns
            if the coumn
"""
def pyramid(n):
    midpoint = (2 * n - 1 ) // 2
    print(midpoint)
    for row in range(n):
        level = ''
        for column in range(2 * n -1):
            if midpoint - row <= column and midpoint + row >= column:
                level += '#'
            else:
                level += ' '
        print(level)


pyramid(3)