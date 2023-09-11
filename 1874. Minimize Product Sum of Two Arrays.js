/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    
    nums1.sort(function(a,b){
        return a - b
    });
    nums2.sort(function(a,b){
        return a - b
    });

    console.log(nums2)
    nums2.reverse()

    console.log(nums1);

    //console.log(nums2);


    var result = 0

    for(var i = 0; i < nums1.length; i++) {
        result += (nums1[i] * nums2[i])
    };


    return result

};