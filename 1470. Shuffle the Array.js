/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // slice the array in half with array slice

    var firstHalf = nums.slice(0, (nums.length / 2));
    var secondHalf = nums.slice(nums.length / 2);
    var result = []

    for(var i = 0; i < firstHalf.length; i++) {
        result.push(firstHalf[i]);
        result.push(secondHalf[i]);
    }

    return result;
};