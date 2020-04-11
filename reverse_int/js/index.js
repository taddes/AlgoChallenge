// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1. parseInt()
// Unless you return an integer, it does not accomodate for - signs! EASY GOTCHA!
reverseInt = (n) => {
    const reversed = String(n).split('').reverse().join('');
    if (n < 0) {
        return parseInt(reversed) * -1;
    } else {
        return parseInt(reversed);
    }
}

// Solution 2. parseInt() ans Math.sign() --> returns a 1 if positive, -1 if negative
// Unless you return an integer, it does not accomodate for - signs! EASY GOTCHA!
reverseInt = (n) => {
    const reversed = String(n).split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)
}


// Solution 2. using toString()
// Still doesn't handle negatives well
reverseInt = (n) => {
    const reversed = parseInt(n.toString().split('').reverse().join(''))  * Math.sign(n);
    return reversed
}

console.log(reverseInt(36))
module.exports = reverseInt;









