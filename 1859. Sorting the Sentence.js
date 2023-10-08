/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    
    //word[word.length - 1]


    let splitString = s.split(' ');
    let result = Array(splitString.length);


    console.log(splitString);

    for (let word of splitString) {

        console.log(word);

        result[parseInt(word[word.length - 1]) - 1] = word.slice(0, word.length - 1);
    }

       result = result.join(' ');

       console.log(result);

       return result;



};