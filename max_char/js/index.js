// --- Directions
// What is the most common Char in the string?
// Does string A have the same number of characters as string B (is an anagram)?
// Does the given string have any repeated characters in it?
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Building a character map
const string = 'Hello There Trello Yello';
const chars = {};

for (let char of string) {
  if (!chars[char]) {
      chars[char] = 1
  } else {
      chars[char]++;
  }
}
// Alternate version. If null reutrns, evals as falsy, puts in 1
for (let char of string) {
chars[char] = chars[char] + 1 || 1;
  }

// console.log(chars)

function maxChar(string) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of string) {
    if (charMap[char]) {
        charMap[char]++;
    } else {
        charMap[char] = 1;
    }
  }


  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar('Hello Velt'))

module.exports = maxChar;