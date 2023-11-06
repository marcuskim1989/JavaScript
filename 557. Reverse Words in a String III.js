/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let split = s.split(' ');

    let reversedSplit = []

    for (let word of split) {
        reversedSplit.push(word.split('').reverse().join(''));
    }

    let result = reversedSplit.join(' ');

    return result;

};

