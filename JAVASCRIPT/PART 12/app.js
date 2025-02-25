//------------------- ASYNC FUNCTIONS ----------------------
// async function greet() {
//     throw "Weak connection";
//     return "hello world!" ; // returns a promise
// }

// greet()
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was : ", result);
// })
// .catch((err) => {
//     console.log("Promise was rejected with err : ", err);
// })

// let demo = async () => {
//     return 5;
// }


//------------------- AWAIT KEYWORD ---------------------
// pauses the execution of its surrounding async function until the promise is settlled (resolved or rejected)

// function getNum () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum(); 
//     await getNum(); 
//     getNum();
// }

h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

async function show() {
    try {
        await colorChange("violet", 1000);
        await colorChange("indigo", 1000);
        await colorChange("green", 1000);
        await colorChange("yellow", 1000);
        await colorChange("orange", 1000);
    } catch (err) {
        console.log("Error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("New number = ", a + 3);

    // return "done";
}
