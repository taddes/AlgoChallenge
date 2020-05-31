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

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += " "
//       }
//     }
//     console.log(stair)
//   }
// }

// steps(3)
// steps(4)
// steps(5)

function printNumber(n) {
  if (n === 0) {
    return;
  }
  console.log(n);
  printNumber(n-1)
}

printNumber(10)

function steps_recursive(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps_recursive(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps_recursive(n, row, stair)

}