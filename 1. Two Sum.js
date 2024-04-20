/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
             
             console.log(i, "  ", j)

            if (nums[i] + nums[j] == target) {

                console.log(i, `: ${nums[i]}`, j, `${nums[j]}`)
                return [i, j]
            }
        }
    }

};