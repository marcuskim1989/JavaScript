/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    
    // loop until i < word.length
        // with each loop, grab the index by using indexOf
        // add the the absolute value of the index minus


        let result = keyboard.indexOf(word[0]);

        let j; 

        for (var iterator = 0; iterator < word.length - 1; iterator++) {
            
            console.log(word[iterator]);
            i = keyboard.indexOf(word[iterator]);
            console.log(i);

            console.log(word[iterator + 1])
            j = keyboard.indexOf(word[iterator + 1]);
            console.log(j)
            
            result = result + Math.abs(i - j);
            console.log ("result: " + result);
        } 

        return result

};