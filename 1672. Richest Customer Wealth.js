/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let max = -1

    // basically, we need to compare the sum of all columns for each given row

    for(let i = 0; i < accounts.length; i++) {
        let currentSum = 0
        for(let j = 0; j < accounts[i].length; j++) {
            currentSum += accounts[i][j];
        }

        if (currentSum > max) {
            max = currentSum;
        }
    }


    return max

};