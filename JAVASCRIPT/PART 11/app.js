//----------------- JS CALL STACK ------------------
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


//------------ VISUALISING THE CALL STACK -----------
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


//------------- JS IS SINGLE THREADED ---------------
// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout(function(){
//     console.log("Apna College");
// }, 2000);

// console.log("hello ...");


// ---------------- CALLBACK HELL ------------------
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("pink", 1000, () => {
//                 changeColor("purple", 1000);
//             });
//         });
//     });
// });


//------------- SETTING UP FOR PROMISES --------------

// function savetoDB(data, success, failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDB(
//     "Apna college", 
//     () => {
//         console.log("Success: Your data was saved");
//         savetoDB(
//             "hello World",
//             () => {
//                 console.log("Success2 : data2 saved");
//                 savetoDB(
//                     "Anjali",
//                     () => {
//                         console.log("Success3 : data3 saved");
//                     },
//                     () => {
//                         console.log("Failure3 : Weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("Failure2 : Weak connection");
//             }
//         );
//     },
//     () => {
//     console.log("Failure: Weak connection, data was not saved", data);
//     }
// );  


//-------------- REFACTORING WITH PROMISES ---------------
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : data was saved");
//         }else{
//             reject("Failure : weak connection");
//         }
//     });
// }

// savetoDB("Apna College");

// THEN() AND CATCH() METHODS
// function savetoDB(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if(internetSpeed > 4){
//             resolve("Success : data was saved");
//         }else{
//             reject("Failure : weak connection");
//         }
//     });
// }

// let request = savetoDB("Apna College");
// request
//    .then(() => {
//         console.log("Promise was resolved");
//         console.log(request);
//    })
//    .catch(() => {
//         console.log("Promise was rejected");
//         console.log(request);
//    })


//----------------- PROMISES CHAINING -----------------

function savetoDB(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success : data was saved");
        }else{
            reject("Failure : weak connection");
        }
    });
}

let request = savetoDB("Apna College");
request
   .then(() => {
        console.log("Data1 saved.");
        return savetoDB("Hello World");
   })
   .then(() => {
        console.log("Data2 saved");
        return savetoDB("Anjali");
    })
    .then(() => {
        console.log("data3 saved");
    })
   .catch(() => {
        console.log("Promise was rejected");
        console.log(request);
   })