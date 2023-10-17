/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    
    let elementSum = nums.reduce((a, b) => a + b);


    console.log(elementSum);

    let stringNumArray = nums.map(a => a.toString());

    let giantString = stringNumArray.reduce((a, b) => a + b);

    console.log(giantString);

    let splitGiantString = giantString.split('');

    let digitSum = splitGiantString.reduce((a, b) => Number(a) + Number(b));

    console.log(digitSum);

    return Math.abs(elementSum - digitSum);
};