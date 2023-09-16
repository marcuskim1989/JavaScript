/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    
    let temp = []

    for (let i = 0; i < names.length; i++) {
        temp.push([names[i], heights[i]]);
    }

    temp.sort(function(a, b) {
        return b[1] - a[1];
    });

    return temp.map(a => a[0]);

};