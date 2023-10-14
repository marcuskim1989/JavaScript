/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // split string into array of string using split()

    // loop through array
        // remove kth element
    // joined array using join()

    // return joined

    let split = s.split(' ');

    return split.slice(0, k).join(' ');
    
};