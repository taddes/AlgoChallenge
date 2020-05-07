// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char in str) {
        if (char in vowels) {
            count++;
        }
    }
    return count
}

function vowels_regex(str) {
    // g makes sure we don't stop at first match
    // i stands for case insensitive
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length: 0;
}


function vowels2(str) {
    let count = 0;
    const checker = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }

    }
    return count;
}

// Better option, using array
function vowels2(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }

    }
    return count;
}



console.log(vowels('aaa'))
console.log(vowels2('aaa'))

module.exports = vowels;
