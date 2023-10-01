/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    
    let result = 0;
        for (let i = 0; i < nums.length; i++) {
            let backStop = i + 1;

            for (let j = backStop; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    let product = i * j;
                    if (product % k == 0) {
                        result += 1;
                    }
                }
            }
        }

    return result;

};