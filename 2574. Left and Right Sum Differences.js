/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
 
    let leftArray = [];
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        sum += nums[i - 1]
        if (i == 0) {
            leftArray.push(0);
        } else {
            leftArray.push(sum);
            console.log(sum);
        }
    };

console.log(leftArray);

};