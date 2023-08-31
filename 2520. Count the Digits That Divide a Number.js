/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    
    let stringNum = String(num);
    let result = 0

    console.log(stringNum);

    let splitNum = stringNum.split('');

    for (let i = 0; i < splitNum.length; i++) {
        if (num % Number(splitNum[i]) == 0) {
            result++
        }
    }

    return result;

};