/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    
    //only one condition has to be met for the entire item to be a valid answer

    var index;

    console.log(ruleKey);

    switch (ruleKey) {

        case "type":
            index = 0;
            break;
        case "color":
            index = 1;
            break;
        case "name":
            index = 2;
            break;
        default:
            break;
    }


    console.log(ruleKey);

    console.log(index);

    var counter = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i][index] === ruleValue) {
            counter++
        }
    }

    return counter


};