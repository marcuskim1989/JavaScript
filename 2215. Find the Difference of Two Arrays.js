/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    
    // loop through both arrays at the same time
        //use .includes() method to check each element

    let length = Math.max(nums1.length, nums2.length);

    let result = [[],[]];

    for (let i = 0; i < length; i++) {

        console.log(i);
        
            if (!nums1.includes(nums2[i])) {
                console.log("nums2[i]: " + nums2[i]);
                if (!result[1].includes(nums2[i])) {
                    result[1].push(nums2[i]);
                }
            } 
        
            if (!nums2.includes(nums1[i])) {
                console.log("nums1[i]: " + nums1[i]);
                if (!result[0].includes(nums1[i])) {
                    result[0].push(nums1[i]);
                }
            }
        
    }

    var filtered0 = result[0].filter(function(x) {
        return x !== undefined;
    });

    var filtered1 = result[1].filter(function(x) {
        return x !== undefined;
    })

    return [filtered0, filtered1]

};