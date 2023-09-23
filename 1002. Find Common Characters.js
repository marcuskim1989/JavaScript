/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    // let result = [];

    // let map = new Map();

    // for (let i = 0; i < words.length; i++) {
    //     let temp = 0;
    //     for (let j = 0; j < words[i].length; j++) {
    //         if (map.has(words[i][j])) {
                
    //             map.set(words[i][j], map.get(words[i][j]), temp);
                
    //         } else {
    //             map.set(words[i][j], 1);
    //         }

    //     }

    //     for (let k = 0; k < words[i].length; k++) {
    //         if (words[i][k] == words[i][j]) {
    //             temp++;
    //         }
    //     }
    // }

    // console.log(map)

    // // //loop through set of keys
    // // // check each 

    // // let set = new Set(map.keys());

    // // // console.log(set)

    // // console.log(map);

    // // for (let word of words) {
    // //     for (let key of map.keys()) {
    // //         if (!word.includes(key)){
    // //             map.delete(key);
    // //         }
    // //     }
    // // }

    // // for (let i = 0; i < words.length; i++) {
    // //     for (let [key, value] of map.entries()) {
    // //         // if (words[i].includes(map.get(map.key))) {
    // //         //     map.set(key, (map.get(key) + 1))
    // //         // }
    // //     }
    // // }

    // // let withoutNeg = Array.from([...map].filter(([key, value]) => value >= 0));

    // // console.log(withoutNeg);

    // // let setWithoutNeg = new Set(withoutNeg)

    // // for (let element of setWithoutNeg) {

    // //     if (element[1] == 0) {
    // //         result.push(element[0]);
    // //         console.log(result);

    // //         continue;
    // //     }
    // //     for (let j = 0; j < element[1] - 1; j++) {

    // //         console.log(element[0]);
    // //         result.push(element[0]);
    // //     }

    // // }

    let result = [];
    let firstWordArray = [...words[0]];

    for (let letter of firstWordArray) {
        if (words.every(word => word.includes(letter))) {
            result.push(letter)
            words = words.map(word => word.replace(letter, ''))
        }
    }
    

   return result;

};