/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    let stringN = n.toString();
    let splitN = stringN.split("");
    let product = 1;
    let sum = 0;
    
    for (let i = 0; i < splitN.length; i++) {
        product *= Number(splitN[i]);
        sum += Number(splitN[i]);
    }


    return product - sum;
};