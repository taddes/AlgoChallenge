// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/* 
From 0 to n (iterate through rows)
    Create an empty string, 'level'
    from 0 to ??? (columns)
        IF the column should have a # 
            add a # to level
        ELSE
            add a space to level
*/

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = "";
  }
}

module.exports = pyramid;
