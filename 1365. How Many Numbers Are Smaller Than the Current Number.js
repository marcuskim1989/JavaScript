/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    // loop i
        // loop j
            // with each iteration, check if nums[j] is smaller than nums[j]
            // if yes, increment result

    let result = [];
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                currentSum++
            }; 
        };
        result.push(currentSum);
        currentSum = 0;
    };

    return result;

};