/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    
    let result = 0;

    for (let factor = 1; factor <= Math.max(a, b); factor++) {
        if (a % factor == 0 && b % factor == 0) {
            result += 1;
        }
    }

    return result;

};

