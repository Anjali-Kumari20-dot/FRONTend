// HIGHER ORDER FUNCTIONS

// A function that does one or both:
// -> takes one or multiple functions as arguments
// -> returns a function

function multipleGreet(func, count){
    for(let i = 1; i <= count; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}

// multipleGreet(function() {console.log("namaste")}, 1000);

multipleGreet(greet, 1000); // greet() -> X