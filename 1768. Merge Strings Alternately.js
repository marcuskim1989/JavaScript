/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    
    let resultString = '';

    let word1Array = word1.split('');
    let word2Array = word2.split('');

    let i = 0;
    let j = 0;

    while (i < word1.length || j < word2.length) {

        if (i < word1.length) {
            resultString += String(word1Array[i]);
        }

        if (j < word2.length) {
            resultString += String(word2Array[j])
        }

        i++;
        j++;

    }

    return resultString;
    
};