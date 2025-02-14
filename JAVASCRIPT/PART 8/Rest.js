// REST 
// Allows a function to take an indifnite number of arguments and bundle them in an array

// function sum(...arguments){
//     for(let i =0 ; i < arguments.length; i++){
//         console.log("You give us: ", arguments[i]);
//     } 
// }
// sum(23);
// sum(34, 457, 84, 576, 346, 32);

function min(a, b, c, d){
    console.log(arguments);
    console.log(arguments.length);
}

min(34, 457, 84, 576);

function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log(sum(23,45,6778,89));