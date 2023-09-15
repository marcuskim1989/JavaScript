/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // var muteNums: [Int] = nums

    //     muteNums.sort()

    //     var firstOfFirstPair = muteNums[muteNums.count - 2]
    //     var secondOfFirstPair = muteNums.last!
    //     var firstOfSecondPair = muteNums.first!
    //     var secondOfSecondPair = muteNums[1]

    //     return (firstOfFirstPair * secondOfFirstPair) - (firstOfSecondPair * secondOfSecondPair)


    
    nums.sort(function (a, b) { return a - b });

    console.log(nums);

    let firstOfFirstPair = nums[nums.length - 2];
    let secondOfFirstPair = nums[nums.length - 1];
    let firstOfSecondPair = nums[0];
    let secondOfSecondPair = nums[1];

    console.log(firstOfFirstPair);
    console.log(secondOfFirstPair);
    console.log(firstOfSecondPair);
    console.log(secondOfSecondPair);

    return (firstOfFirstPair * secondOfFirstPair) - (firstOfSecondPair * secondOfSecondPair);

};