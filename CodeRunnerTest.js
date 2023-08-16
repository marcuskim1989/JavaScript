// console.log('Hello, World!')
// console.log('Hello, dude')

// var person = "John";
// var age = 69;

// console.log(person)
// console.log(age)

// var greeting = "What's up, "

// console.log(greeting, person, "aged ", age)

// console.log(!(4 != 4))

// for (i = 1; i <= 100; i++) {
//     console.log(i + " M&M's")
// }

function letterFinder(word, match) {
    for (var i = 0; i <= word.length; i++) {
        if (word[i] == match){
            console.log("Found the ", match,  "at ", i)
        } else {
            console.log("---No match found at ", i)
        }
    }
}

letterFinder("test", "t")