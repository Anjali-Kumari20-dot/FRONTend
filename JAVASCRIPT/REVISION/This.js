// // const square = (n) =>  n*n;
// // console.log(`${square(4)}`);

// // let id = setInterval(() => {
// //     console.log("Hello World");
// // }, 2000);

// // setTimeout(() => {
// //     clearInterval(id);
// //     console.log("clear interval");
// // }, 10000);

// // QUESTION 1
// const ArrayAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum / arr.length ;
// }

// console.log(`${ArrayAverage([12, 34, 56, 67, 22])}`);

// // QUESTION 2

// const isEven = (n) => {
//     if(n % 2 == 0) return console.log("Even");
//     else return console.log("Odd");
// }

// console.log(`${isEven(23)}`);

// // QUESTION 3

// const object = {
//     message: 'Hello,  World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(() => object.logMessage(), 1000);

// QUESTION 4

let length = 4;

function callback() {
    console.log(this.length);
}

const object2 = {
    length : 5,
    method(callback){
        callback();
    },
};
// object2.method(callback.bind(object2), 1, 2); // 5
object2.method(callback, 1, 2); // undefined