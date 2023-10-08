/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {


    var result = 0
    
    for(var i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            result++
        }
    }

    return result

};