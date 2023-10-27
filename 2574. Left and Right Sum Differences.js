/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
 
    let leftArray = [];
    let rightArray = [];
    let result = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        
        
        if (i == 0) {
            leftArray.push(0);
        } else {
            sum += nums[i - 1];
            leftArray.push(sum);
            console.log(sum);
        }
    };

console.log(leftArray);

sum = 0;

for(let i = nums.length - 1; i >= 0; i--) {
    
    if (i == nums.length - 1) {
        rightArray.push(0)
        console.log(rightArray)
    } else {
        sum += nums[i + 1];
        rightArray.push(sum);
        console.log(sum);
    }
}

rightArray = rightArray.reverse();

console.log(rightArray);

for (let i = 0; i < nums.length; i++) {
    result.push(Math.abs(leftArray[i] - rightArray[i]));
}

return result;

};