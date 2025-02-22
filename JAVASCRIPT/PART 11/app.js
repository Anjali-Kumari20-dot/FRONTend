//------------ JS CALL STACK -------------
// function hello() {
//     console.log("Inside hello function");
//     console.log("Hello");
// }

// function demo(){
//     console.log("Calling hello function");
//    hello(); 
// }

// console.log("Calling demo function");
// demo();

// console.log("Done, bye!");


//-------- VISUALISING THE CALL STACK -------
function one(){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}

three();