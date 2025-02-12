// What is the output of the following code:

const object = {
    message : "Hello, World!",

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);

// setTimeout/setInterval/Promise/Async/Await - Yeh ek asynchronous function hai, jo callback function ko execute karne ke liye ek naya context banata hai. Is naye context mein, this keyword global context ko refer karta hai.
// yeh callback function global context (window ya global) mein execute hota hai. Isliye, this keyword global context ko refer karta hai, aur this.message undefined hota hai.
