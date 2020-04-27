// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Dealing with what appears like a matrix with indices
// n = 3
// # - -
// # # -
// # # #

// From 0 to n (iterate through rows)
//     Create empty string 'stair'
//     from 0 to n (iterate through columns)
//         if curent col is equal or less than current row
//             add # to stair
//         else
//             add space to stair
//         console.log stair

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}




// Recursive Solution
// Figure out the bare minimum pieces to represent the problem
// Give reasonable defaults to the bare minimum pieces of info
// Check base case. Is there any work left to do? If not, return
// Do some work, call your function again, making sure the arguments have changed in some fashiion

// 1. If (row === n) then we have hit the end of our problem
//        Ex. If only a 3 row pyramid, once you hit row 3, you're done
// 2. If the stair string has a length === n then we are at the end of a row
// 3. If the length of the stair string is less than or equal to the row number
// we're working on, add a #, otherwise add a space
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}

steps(5);

module.exports = steps;