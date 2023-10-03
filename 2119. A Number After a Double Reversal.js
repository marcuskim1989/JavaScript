/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    
    // cast num to string
    // reverse string
    // cast reversed string to number, which should drop leading zeroes
    // cast number to string
    // reverse string again
    // compare

    let stringNum = num.toString();

    let reversedString = stringNum.split('').reverse().join('');

    let reversedNumber = Number(reversedString);

    reversedString = reversedNumber.toString();

    stringNum = reversedString.split('').reverse().join('');

    let number = Number(stringNum);

    return number === num;
};