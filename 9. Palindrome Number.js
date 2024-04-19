/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    // loop from start and from end
    // compare each
    // return false at first inequality

    let xString = x.toString()

    let j = xString.length - 1

    for(let i = 0; i <= j; i++) {
        if (xString[i] != xString[j]) {
            return false
        } else {
            j -= 1
        }
    }

    return true




};