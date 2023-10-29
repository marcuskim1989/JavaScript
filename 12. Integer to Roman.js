/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

    // loop
        // subtract 1000, 500, 100, 50, 10, 5, 1 in descending order from num
            // if num < the subtrahend, continue
        // whenever we successfully subtract by one of these, append the corresponding numeral to the string
        // examine the string
            //loop through string
                // if we ever find IIII, XXXX, or CCCC, replace with IV, IX, XL, XC, CD, or CM

    // let result = "";

    // let subtrahends = [1000, 500, 100, 50, 10, 5, 1];

    // while (num > 0) {

    //     for (let subtrahend of subtrahends) {
    //         if (num < subtrahend) {
    //             continue;
    //         } else {
    //             switch (subtrahend) {
    //                 case 1000:
    //                     result += "M";
    //                     break;
    //                 case 500:
    //                     result += "D";
    //                     break;    
    //                 case 100:
    //                     result += "C";
    //                     break;
    //                 case 50:
    //                     result += "L";
    //                     break;
    //                 case 10:
    //                     result += "X";
    //                     break;
    //                 case 5:
    //                     result += "V";
    //                     break;
    //                 case 1:
    //                     result += "I"
    //                     //console.log(result)
    //                     break;
    //                 default:
    //                     break;
    //             }
                

    //             num -= subtrahend;


    //         }
    //     }

        
    //     console.log("Before: ", result);

    //     if (result.includes("DD")) {
    //         result = result.replace("DD", "CM");
    //     } 

    //     if (result.includes("CCCC")) {
    //         result = result.replace("CCCC", "CD");
    //     } 
        
    //     if (result.includes("LL")) {
    //         result = result.replace("LL", "XC");
    //     } 

    //     if (result.includes("XXXX")) {
    //         result = result.replace("XXXX", "XL");
    //     }

    //     if (result.includes("VV")) {
    //         result = result.replace("VV", "IX");
    //     }

    //     if (result.includes("IIII")) {
    //         result = result.replace("IIII", "IV");
    //     } 

    //     console.log("After: ", result);
    // }

    // return result;

    //create the list..
    const M = ["", "M", "MM", "MMM"];
    const C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    //return solution with this procedure...
    return M[Math.floor(num / 1000)] + C[Math.floor((num % 1000) / 100)] + X[Math.floor((num % 100) / 10)] + I[num % 10];

}
        