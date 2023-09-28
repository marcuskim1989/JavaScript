/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    
    let teams = n;
    let matches = 0;

        while (teams != 1) {
            matches += teams / 2;

            if (teams % 2 == 1) {
                teams = (teams / 2) + 1;
            } else if (teams % 2 == 0) {
                teams /= 2;
            }
        }

    return matches;

};

