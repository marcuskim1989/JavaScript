/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @return {number}
 */
var findDelayedArrivalTime = function(arrivalTime, delayedTime) {


    let result = arrivalTime + delayedTime

    if (result >= 24) {
        result = result -24
    }

    return result


};