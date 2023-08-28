/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {

    let stringNum = num.toString();
    let splitNum = stringNum.split('');
    let sortedNum = splitNum.sort();

    return Number(splitNum[0] + splitNum[3]) + Number(splitNum[1] + splitNum[2])



}; 