// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let word_list = str.split(' ');
//     let title_list = [];

//     for (let word of word_list) {
//         title_list.push(word.slice(0,1).toUpperCase() + word.slice(1))
//     }
//     return title_list.join(' ')
// }

// Alternate Solution
` 
Create enpty string, result
For each char in string
    IF char to the left a space
        capitalize and add to result
    ELSE
        Add to result
`
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            resuilt += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}

console.log(capitalize('Tis is the greatest function'))

module.exports = capitalize;
