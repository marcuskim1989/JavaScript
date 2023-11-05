/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    // use map to store letters as keys and morse letters as values
    // loop through each word and create a morse word by accessing the letter keys and concatenating
        // store each of these morse words in an array
        //whenever we find a unique word, increment unique words counter

    let english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let letterMap = {};
    let conversions = [];
    let concatenation = "";
    let morseWordMap = {};
    let result = 0;

    for (let i = 0; i < 26; i++) {
        letterMap[english[i]] = morse[i];
    }



    for (let word of words) {
        for (let letter of word) {
            concatenation += letterMap[letter]
        }
    
        conversions.push(concatenation);

        concatenation = "";

    }

    console.log(conversions);


    for (let morseWord of conversions) {

        const hasKey = morseWord in morseWordMap;

        if (!hasKey) {
            morseWordMap[morseWord] = "unique";
            result++;
        } 
    }

    return result;

};