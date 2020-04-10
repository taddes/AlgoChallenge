// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     if (reversed === str) {
//         return true
//     } else {
//         return false
//     }
// }

// Solution 2
// More terse way of doing the same
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('')
//     return str == reversed

// Solution 3
// Array helper method every() - bool check on every element of the array
// array.every((val)=> val > 5)
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length -i -1];
    });

}

console.log(palindrome('abba'))
module.exports = palindrome;

