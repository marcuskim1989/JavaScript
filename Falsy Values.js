
try {

function addTwoNums(a, b) {

    if (typeof(a) != "number") {
        throw new ReferenceError("the first argument is not a number");    
    } else if (typeof(b) != "number") {
        throw new ReferenceError("the second argument is not a number");
    }

    console.log(a + b);
};

} catch(err) {
    console.log("Error! ",err);
}

addTwoNums(5, "5")