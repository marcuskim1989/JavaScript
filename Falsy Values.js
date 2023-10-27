
// try {

// function addTwoNums(a, b) {

//     if (typeof(a) != "number") {
//         throw new ReferenceError("the first argument is not a number");    
//     } else if (typeof(b) != "number") {
//         throw new ReferenceError("the second argument is not a number");
//     }

//     console.log(a + b);
// };

// } catch(err) {
//     console.log("Error! ",err);
// }

// //addTwoNums(5, "5")

// function letterFinder(word, match) {

//     let condition1 = typeof(word) == "string" && word.length >= 2;

//     console.log(condition1);

//     let condition2 = typeof(match) == "string" && match.length == 1;

//     console.log(condition2);

//     if(condition1 == true && condition2 == true) {
//         for(let i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 //if the current character at position i in the word is equal to the match
//                 console.log('Found the', match, 'at', i);
//             } else {
//                 console.log('---No match found at', i);
//             }
//         }
//     } else {
//         console.log("Please pass correct arguments to the function");
//     }

    
// }

// letterFinder("cat", "c");

(10).toString(100); 