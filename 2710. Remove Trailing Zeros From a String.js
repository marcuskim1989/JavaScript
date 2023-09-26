/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    
    let reversed = num.split('').reverse().join('');
    
    let i = 0;

    while (reversed[i] == 0) {
        
        
        if (reversed[i] == 0) {
            reversed = reversed.slice(1); 
             
            i = 0;
        }
    }

    return reversed.split('').reverse().join('');
};