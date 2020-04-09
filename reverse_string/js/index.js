// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution 1 - easiest, not necessarily obvious
// reverse is built in, reversing all elements in a given array
// Array prototype method. Convert string to an array
// 1. split string on every element 2. reverse the array 3. join together to string
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

// Solution 2
// 1. create empty string called reversed
// 2. iterate through string backwards
// 3. for each char in string, take character and add it to reversed
reverse = (str) => {
  let reversed = '';
  
  for(let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed
    console.log(reversed)
  }
  return reversed
};

// ES6 implementation
reverse = (str) => {
    let reversed = '';
    
    for(let character of str) {
      reversed = character + reversed;
      console.log(reversed)
    }
    return reversed
  };
  

// Solution 3
// Complicated array helper reduce
// str.split('') to create array
// Reduce breaks down array elements into a single value
// Function runs one time for each value in array
reverse = (str) => {
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
};
// More es6 ish 
reverse = (str) => {
    debugger;
    return str.split('').reduce((rev, char) => char + rev, '');
  };


console.log(reverse('Waffle house'));
console.log(reverse('Eat Crow Joe'));


module.exports = reverse;