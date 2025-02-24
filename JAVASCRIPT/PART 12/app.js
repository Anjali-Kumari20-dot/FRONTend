//------------------- ASYNC FUNCTIONS ----------------------
async function greet() {
    throw "Weak connection";
    return "hello world!" ; // returns a promise
}

greet()
.then((result) => {
    console.log("Promise was resolved");
    console.log("Result was : ", result);
})
.catch((err) => {
    console.log("Promise was rejected with err : ", err);
})