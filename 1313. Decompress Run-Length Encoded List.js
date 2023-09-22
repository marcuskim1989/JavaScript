/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    
    // loop, iterate by 2 every time
        // keep track of current element along with next element
        // with each iteration, check current element, which is frequency, and check the next element, which is value
        // loop, iterate a number of times equal to frequency
            // keep pushing value


    let result = [];

    for (let i = 0; i < nums.length - 1; i += 2) {
        
        let freq = nums[i];
        let val = nums[i + 1];

        for (let j = 0; j < freq; j++) {
            result.push(val);
        }
    }

    return result;

};