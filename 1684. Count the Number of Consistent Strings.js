/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    
    //loop over entire array
        // loop over a string
            //check if each character in the string appears in allowed
            // if no, break
            // if by the end, yes, increment counter

    let mismatched = false;
    let result = 0;

    for (let i = 0; i < words.length; i++) {

        let splitString = words[i].split('');

        for (let j = 0; j < splitString.length; j++) {
            if (!allowed.includes(splitString[j])) {
                mismatched = true;
                break;
            }
        }

        if (mismatched == false) {
            result++;
        } else {
            mismatched = false;
        }
    }

    return result;

};