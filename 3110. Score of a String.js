/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    // convert string into in array
        // loop over array with iterator i
            // j = i + 1
            //absolute value array[i] - array[j]
                // add to growing sum


    let result = 0;

    for(let i = 0; i <= s.length - 2; i++) {
        let j = i + 1;
        result += Math.abs(s.charCodeAt(i) - s.charCodeAt(j))

        console.log(i, " ", j)
    }

    return result;
};