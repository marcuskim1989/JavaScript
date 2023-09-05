/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let concatenatedWord1 = word1.join('');
    let concatenatedWord2 = word2.join('');

    if (concatenatedWord1 == concatenatedWord2) {
        return true;
    }

    return false;

};