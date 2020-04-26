// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let stringA_strip = stringA.replace(/[^\w]/g, '').toLowerCase()
//     let stringB_strip = stringB.replace(/[^\w]/g, '').toLowerCase()
    
//     let str_a_map = {}
//     let str_b_map = {}

//     for (let char of stringA_strip.split('')) {
//         str_a_map[char] = str_a_map[char] + 1 || 1;
//     }
//     for (let char of stringB_strip.split('')) {
//         str_b_map[char] = str_b_map[char] + 1 || 1;
//     }
// }

anagrams = (stringA, stringB) => {
    charMapA = charMapHelper(stringA);
    charMapB = charMapHelper(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
        return false;
    }
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}

// helper function option to help create char maps
function charMapHelper(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}


// Alternate Solution - Less iteration
// Exact comparision of the exact same string!!! Very clean, easy way to solve
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^/w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('KARK JARK', 'Lethan! BoHN')
module.exports = anagrams;


