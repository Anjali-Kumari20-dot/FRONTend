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
// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


//---------- JS IS SINGLE THREADED -----------
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout(function(){
//     console.log("Apna College");
// }, 2000);

// console.log("hello ...");

// -------------- CALLBACK HELL ----------------

h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("pink", 1000, () => {
                changeColor("purple", 1000);
            });
        });
    });
});
// changeColor("orange", 2000);
// changeColor("green", 3000);