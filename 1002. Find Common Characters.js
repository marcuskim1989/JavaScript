/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // use .includes()

    let result = [];

    let set = new Map();

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            set.add(words[i][j]);
        }
    }

    console.log(set);

    let setArray = Array.from(set)

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < setArray.length; j++) {
            if (!words[i].includes(setArray[j])) {
                setArray.splice(j, 1);
                break;
            }
        }
    }

   return setArray;

};