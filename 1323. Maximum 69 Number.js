/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    
    let stringNum = String(num);

    let arrayNum = stringNum.split('')

    console.log(arrayNum);

    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] == '6') {
            arrayNum[i] = '9';
            break;
        }
    }

    stringNum = arrayNum.join('');

    num = Number(stringNum);

    return num
};