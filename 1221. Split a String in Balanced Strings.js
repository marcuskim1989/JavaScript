/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    
    let left = 0;
    let right = 0;
    let result = 0;


    for (let i = 0; i < s.length; i++) {
        if (s[i] == "L") {
            left += 1;
        } else {
            right += 1;
        }

        if (left == right) {
            result += 1;
        }
    }

    return result;
};