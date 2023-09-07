/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    
    let numsSorted = nums.sort(function (a, b) { return a - b });

    let firstHalf = numsSorted.slice(0, numsSorted.length / 2);
    let secondHalf = numsSorted.slice((numsSorted.length / 2), numsSorted.length);
    
    let reversedSecondHalf = secondHalf.reverse();

    console.log(firstHalf);
   
    console.log(reversedSecondHalf);

    let sumArray = [];

    for (let i = 0; i < firstHalf.length; i++) {
        sumArray.push(firstHalf[i] + reversedSecondHalf[i]);
    }

    console.log(sumArray);

    return Math.max(...sumArray);

};