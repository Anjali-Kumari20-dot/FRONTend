// Scope determines the accessibility of variables, objects, and functions from different parts of the code.
// ...Function
// ...Block
// ...Lexical

// FUNCTION SCOPE :- variables defined inside a function are not accessible(visible) from outside the function

let sum = 54; // global function

function clac_sum(a, b){
    // let sum = a + b; // function scope
    console.log(sum);
}

clac_sum(3452, 76859);
console.log(sum);
