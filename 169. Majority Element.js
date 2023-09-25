/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    // use a map to store the number of occurences of each element
    // whenever we find an element that has greater than n/2 occurrences, we stop, then return that element

    let map = new Map();

    if (nums.length == 1) {
        return nums[0];
    }

    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, (map.get(num) + 1));
            if (map.get(num) > nums.length / 2) {
                return num;
            }
            console.log(map)
        } else {
            map.set(num, 1);
        }
    } 

    //console.log(map);

};