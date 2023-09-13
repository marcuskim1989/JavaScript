/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // create array
    // iterate until <nums.length
        //keep appending with push method

        var ans = []

        for(var i = 0; i < nums.length; i++) {
            ans.push(nums[nums[i]])
        };
    
    return ans

};