"""
 --- Directions
 Write a function that accepts a positive number N.
 The function should console log a step shape
 with N levels using the # character.  Make sure the
 step has spaces on the right hand side!
 --- Examples
   steps(2)
       '# '
       '##'
   steps(3)
       '#  '
       '## '
       '###'
   steps(4)
       '#   '
       '##  '
       '### '
       '####'

 Dealing with what appears like a matrix with indices
 n = 3
 # - -
 # # -
 # # #

 From 0 to n (iterate through rows)
     Create empty string 'stair'
     from 0 to n (iterate through columns)
         if curent col is equal or less than current row
             add # to stair
         else
             add space to stair
         print stair
"""

def stairs(n):
    for row in range(n):
        stair = ""
        for column in range(n):
            if column <= row:
                stair += '#'
            else:
                stair += ' '
        print(stair)

stairs(3)
stairs(4)
stairs(5)

def reverse_stairs(n):
    for row in range(n):
        stair = ""
        for column in range(n):
            if column >= n:
                stair += "#"
            else:
                stair += " "
        print(stair)

reverse_stairs(3)
reverse_stairs(4)
reverse_stairs(5)
